import React, { useState } from 'react'
import { db } from '../../firebase/config'
import { addDoc, collection } from 'firebase/firestore';

function NewAlbumForm() {
    const [albumName, setAlbumName] = useState();

    const handleCreateAlbum = async () => {
        if (!albumName) {
            return
        }
        try {
            const albumsRef = collection(db, "albums")
            await addDoc(albumsRef, { name: albumName })

            console.log('album created successfully')
            setAlbumName('')
        }
        catch (error) {
            console.log('error creating album: ', error)
        }
    }

    const onAlbumNameChange = (e) => {
        setAlbumName(e.target.value)
    }

    return (
        <div>
            <input type="text" value={albumName} onChange={onAlbumNameChange} className='border-black-100 border-2' />
            <button className='bg-stone-highlight' onClick={handleCreateAlbum}>
                Create new album
            </button>
        </div>
    )
}

export default NewAlbumForm
