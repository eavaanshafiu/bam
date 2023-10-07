import { useEffect, useState, useRef } from 'react';
import Layout from '../../Layout.'
import { useParams } from 'react-router-dom';
import { db, storage } from '../../firebase/config';
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';
import { onSnapshot, doc, collection, updateDoc } from 'firebase/firestore';


function Album() {
    console.log('album component is rendered')

    const [images, setImages] = useState([])
    const { album } = useParams()
    const fileRef = useRef()

    useEffect(() => {
        const albumRef = doc(db, 'albums', album);
        console.log('Album reference in Firestore:', albumRef.path);

        const unsubscribe = onSnapshot(albumRef, (doc) => {
            if (doc.exists()) {
                setImages(doc.data().images || []);
            } else {
                console.log('Album not found')
            }
            console.log('Album document content:', doc.data());
        })
        return () => {
            unsubscribe()
        }
    }, [album])

    const onUpload = async (file) => {
        if (file === undefined || file === null) {
            alert('File is undefined or null. Cannot upload')
          return;  
        }

        const storageRef = ref(storage, `${album}/${file.name}`);

        try {
            await uploadBytes(storageRef, file);
            const url = await getDownloadURL(storageRef);
            // Update the images array in Firestore
            const updatedImages = [...images, { name: file.name, url: url }]


            const albumDocRef = doc(db, 'albums', album);
            await updateDoc(albumDocRef, { images: updatedImages });
            console.log('document updated successfully')
            setImages(updatedImages);
        }
        catch (error) {
            console.error('Error Uploading file: ', error)
        }
    }
    //upload file to storage, get its dUrl, update albums collection by adding new image to images array w name and url

    function onSubmit(e) {
        const selectedFile = fileRef.current.files && fileRef.current.files[0]; // check if target file exists
        console.log('file is selcted:', selectedFile)
        if (selectedFile) {
            onUpload(selectedFile); // Call onUpload with the selected file
        }
    }

    return (
        <Layout>

            <section>
                <form className='flex items-center justify-center gap-8 mt-5'>
                    <input type="file"
                    ref={fileRef}
                        className="file-input file-input-bordered w-full max-w-xs" />
                    <button type='button'
                        onClick={onSubmit}
                        className='btn gap-3'
                    >
                        Upload Image
                    </button>
                </form>

                <span className='grid grid-cols-2 justify-center'>
                    {images.map((image, index) => (
                        <aside className='m-10 grid' >
                            <div key={index} className="card w-72 bg-base-100 shadow-xl">
                                <figure><img src={image.url} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {image.name}
                                    </h2>
                                </div>
                            </div>
                        </aside>
                    ))}
                </span>

            </section>

        </Layout>
    )
}

export default Album

//https://www.youtube.com/watch?v=SvTfX7t_qSc