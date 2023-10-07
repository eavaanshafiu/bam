import React, { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from './config';
import { useParams } from 'react-router-dom';

function useStorage() {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const {album} = useParams();
    const currentAlbum = album;
    console.log("current album is ", currentAlbum)


    const startUpload = async (file, currentAlbum) => {
        if (!file || !currentAlbum) {
            return
        }

        const fileId = file.name;
        const storagePath = `images/albums/${currentAlbum}/${file.name}` //because these albums are for the images page.

        const storageRef = ref(storage, storagePath);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            setProgress(progress);
        }, (error) => {
            setError(error)
        }, async () => {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            

            const albumRef = collection(db, `images/albums/${currentAlbum}`)

            // Store data into the current album collection in the firestore database
            await addDoc(albumRef, {
                file: file,
                fileUrl: downloadURL,
                addedOn: new Date(),
            });

            setProgress(progress)
        });
    }

    return {
        progress, error, startUpload
    }
}

export default useStorage
