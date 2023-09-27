import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/config';
import { collection, onSnapshot } from 'firebase/firestore';
import ImageHome from './ImageHome';

function ImagePage() {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        const albumsCollection = collection(db, 'albums')

        const unsubscribe = onSnapshot(albumsCollection, (snapshot) => {
            const tempAlbums = [];
            snapshot.forEach(doc => {
                tempAlbums.push({ ...doc.data(), id: doc.id });
            })
            setAlbums(tempAlbums)
        })
        
        return () => unsubscribe()
        
    }, [])

    return (
        <>
        </>
    )
}

export default ImagePage;
