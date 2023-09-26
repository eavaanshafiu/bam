import React, { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { collection, addDoc } from "firebase/firestore";
import { storage, db } from './config';
import { v4 as uuidv4 } from 'uuid';

function useStorage(contentType) {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);

    const startUpload = (file) => {
        if (!file) {
            return
        }

        const fileId = uuidv4();
        const formatFile = file.type.split('/')[1];
        let storagePath;

        if (contentType === 'image') {
            storagePath = `images/${fileId}.${contentType}`;
        } else if (contentType === 'video') {
            storagePath = `videos/${fileId}.${contentType}`;
        } else if (contentType === 'logo') {
            storagePath = `logos/${fileId}.${contentType}`;
        }

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
            setProgress(progress)

            // Determine the appropriate collection based on the file type
            let collectionRef;
            if (contentType === 'image') {
                collectionRef = collection(db, "images");
            } else if (contentType === 'video') {
                collectionRef = collection(db, "videos");
            } else if (contentType === 'logo') {
                collectionRef = collection(db, "logos");
            }

            // Store data into the appropriate collection
            await addDoc(collectionRef, {
                fileUrl: downloadURL,
                addedOn: new Date(),
            });
        });
    }

    return {
        progress, error, startUpload
    }
}

export default useStorage
