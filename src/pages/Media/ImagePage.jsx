import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/config';
import { collection, onSnapshot, setDoc, doc } from 'firebase/firestore';
import Layout from '../../Layout.';
import { Link } from 'react-router-dom';

function ImagePage() {
    const [albums, setAlbums] = useState([]);
    const [albumName, setAlbumName] = useState();

    const handleCreateAlbum = async () => {
        if (!albumName) {
            return
        }
        try {
            //getting a reference to the albums collection
            const albumsRef = collection(db, "albums")
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
        <Layout>
            <form className='flex items-center justify-center gap-8'>
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

            <section>
                {albums.map(album => (
                    <aside className='my-10' >
                        <Link to={`/${encodeURIComponent(album.name)}/*`}>
                            <div key={album.name} className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={album.image} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {album.name}
                                    </h2>
                                </div>
                            </div>
                        </Link>
                    </aside>
                ))}
            </section>
        </Layout>
    )
}

export default ImagePage;