import { useEffect, useState, useRef } from 'react';
import Layout from '../../Layout.'
import { useParams, useLocation } from 'react-router-dom';
import { db, storage } from '../../firebase/config';
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';
import { onSnapshot, doc, updateDoc } from 'firebase/firestore';
import FileSaver from 'file-saver';

function Album() {
    console.log('album component is rendered')
    const [medias, setMedias] = useState([])
    const { album } = useParams();
    const fileRef = useRef()
    const { state: albumType } = useLocation();
    console.log('album component is rendered with albumType:', albumType);

    useEffect(() => {
        const albumRef = doc(db, `${albumType}`, album);  //refers to the 'albums' doc in firestore
        console.log('Album reference in Firestore:', albumRef.path);

        const unsubscribe = onSnapshot(albumRef, (doc) => { //listening for changes
            console.log('albumref', albumRef)
            if (doc.exists()) {
                setMedias(doc.data().medias || []);  //if document exists, add the medias array to the doc or set an empty array in the doc
            } else {
                console.log('Album not found')
            }
            console.log('Album document content:', doc.data());
        })
        return () => {
            unsubscribe() //stop listening for changes
        }
    }, [album, albumType])

    const onUpload = async (file) => {
        if (file === undefined || file === null) {
            alert('File is undefined or null. Cannot upload')
            return;
        }

        const storageRef = ref(storage, `${album}/${file.name}`); //refers to the path in storage where files should go

        try {
            await uploadBytes(storageRef, file);//uploading file to the path defined in storageRef
            const url = await getDownloadURL(storageRef); //getting download url from the storage location
            const updatedMedias = [...medias, { name: file.name, url: url }]//defining contents of the updatedmedias
            console.log('media',medias)

            const albumDocRef = doc(db, `${albumType}`, album); //refers to the 'albums' doc in firestore
            await updateDoc(albumDocRef, { medias: updatedMedias }); //update the 'albums' doc witn array called medias that has contents of the updatedmedias
            console.log('document updated successfully')
            setMedias(updatedMedias);//set the medias array to the contents of updatedmedias
        }
        catch (error) {
            console.error('Error Uploading file: ', error)
        }
    }
    //upload file to storage, get its dUrl, update albums collection by adding new image to medias array w name and url

    function onSubmit(e) {
        const selectedFile = fileRef.current.files && fileRef.current.files[0]; //setting the current file as selected file.
        console.log('file is selcted:', selectedFile)
        if (selectedFile) {
            onUpload(selectedFile); // Call onUpload with the selected file
        }
    }

    var download = function(url, filename, callback){
        FileSaver.saveAs(url, filename);
      };


    return (
        <Layout>

            <section >
                <form className='flex items-center justify-center gap-8 mt-8'>
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
                    {medias.map((media, index) => (
                        <aside className='m-10 grid' key={index} >
                            <div  className="card w-72 bg-base-100 shadow-xl">

                                <figure><img src={media.url} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">
                                        {media.name}
                                    </h2>
                                    <p className='cursor-pointer' onClick={() => {
                                        download(media.url, media.name, () => {
                                        console.log('done')
                                    })
                                    }}>delete</p>
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
