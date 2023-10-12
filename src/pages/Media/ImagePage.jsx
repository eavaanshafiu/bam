import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/config';
import { collection, onSnapshot, setDoc, doc } from 'firebase/firestore';
import Layout from '../../Layout.';
import {  useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function ImagePage() {
    const [albums, setAlbums] = useState([]);
    const [albumName, setAlbumName] = useState();
    const {album} = useParams()
    const albumType = 'images';
    console.log('page val: ', albumType)



    const handleCreateAlbum = async () => {
        if (!albumName) {
            return
        }
        try {
            //getting a reference to the albums collection
            const albumsRef = collection(db, `${albumType}`)
            await setDoc(doc(albumsRef, albumName), {
                name: albumName,
            });

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

    useEffect(() => {
        const albumsCollection = collection(db, `${albumType}`)

        const unsubscribe = onSnapshot(albumsCollection, (snapshot) => {
            const tempAlbums = [];
            snapshot.forEach(doc => {
                tempAlbums.push({ ...doc.data(), id: doc.id });
            })
            setAlbums(tempAlbums)
        })

        return () => unsubscribe()

    }, [])

    const navigate = useNavigate();
    const navigateToAlbum = (album) => {
        navigate(`/${albumType}/${encodeURIComponent(album.name)}`, { state: albumType})
    }

    return (
        <Layout>
            <form className='flex items-center justify-center gap-8 m-8'>
                <input type="text"
                    onChange={onAlbumNameChange}
                    className="file-input file-input-bordered w-full max-w-xs" />
                <button type='button'
                    onClick={handleCreateAlbum}
                    className='btn gap-3'
                    disabled={!albumName}
                >
                    Ceate new album
                </button>
            </form>

            <section className='mx-8'>
                {albums.map(album => (
                    <aside className='my-10' >
                        <span className='cursor-pointer' onClick={() => navigateToAlbum(album)}>
                            <div key={album.name} className="card w-72 bg-base-100 shadow-xl">
                                <figure><img src={album.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {album.name}
                                    </h2>
                                </div>
                            </div>
                        </span>
                    </aside>
                ))}
            </section>
        </Layout>
    )
}

export default ImagePage;