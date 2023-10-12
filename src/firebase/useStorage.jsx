// import React, { useState } from 'react'
// import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
// import { collection, addDoc } from "firebase/firestore";
// import { storage, db } from './config';
// import { useParams } from 'react-router-dom';
// import ImagePage from '../pages/Media/ImagePage';

// function useStorage() {
//     const [progress, setProgress] = useState(0);
//     const [error, setError] = useState(null);
//     const {album} = useParams();
//     const currentAlbum = album;
//     console.log("current album is ", currentAlbum)


//     const startUpload = async (file, currentAlbum) => {
//         if (!file || !currentAlbum) {
//             return
//         }

//         const storagePath = `images/albums/${currentAlbum}/${file.name}` //setting up path for files to go

//         const storageRef = ref(storage, storagePath); // creating a reference for that path in storage
//         const uploadTask = uploadBytesResumable(storageRef, file);

//         uploadTask.on('state_changed', (snapshot) => {
//             const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//             console.log('Upload is ' + progress + '% done');
//             setProgress(progress);
//         }, (error) => {
//             setError(error)
//         }, async () => {
//             const downloadURL = await getDownloadURL(uploadTask.snapshot.ref); 
            
//             const albumRef = collection(db, `images/albums/${currentAlbum}`) //creating reference for the album path in the database

//             // Store data into the current album collection in the firestore database
//             await addDoc(albumRef, {
//                 file: file,
//                 fileUrl: downloadURL,
//                 addedOn: new Date(),
//             });

//             setProgress(progress)
//         });
//     }

//     return {
//         progress, error, startUpload
//     }
// }

// export default useStorage
