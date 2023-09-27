import React, { useEffect, useState } from 'react'
import Layout from '../../Layout.';
import { db } from '../../firebase/config';
import NewAlbumForm from '../../components/Media-Collections/NewAlbumForm';
import { collection, onSnapshot } from 'firebase/firestore';
import { Routes, Route, Link } from 'react-router-dom';
import Album from '../../components/Media-Collections/Album';


function ImageHome({ albums }) {
    console.log(albums)
    console.log('imageHome is rendering')
    return (
        <Layout>
            <section>
                {albums.map(album => (
                    <aside className='my-10'>
                        <Link to={`${album.id}`}>
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure><img src={album.photo} alt="Shoes" /></figure>
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

            <NewAlbumForm />
        </Layout>
    )
}

export default ImageHome
