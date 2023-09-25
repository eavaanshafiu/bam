import React, { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { storage } from './config';
import { v4 as uuidv4 } from 'uuid';

function useStorage() {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    const startUpload = (file) => {
        if (!file) {
            return
        }

        const fileId = uuidv4();
        const formatFile = file.type.split('/')[1];

        const storageRef = ref(storage, `images/${fileId}.${formatFile}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            setProgress(progress);
        }, (error) => {
            setError(error)
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                setUrl(downloadURL)
                setProgress(progress)
            });
        });
    }

    return {
        progress, error,  startUpload
    }
}

export default useStorage
