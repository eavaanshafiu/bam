import React from 'react'
import Layout from '../../Layout.';
import FileUploader from '../../components/FileUploader';
import useFirestore from '../../firebase/useFirestore';

function ImagePage() {
    const { docs: images, isLoading } = useFirestore('images');
    console.log(images)

    if (isLoading) {
        return (
            <div className='text-center mt-48 '>
                <progress className="progress w-1/4"></progress>
            </div>
        )
    }

    return (
        <Layout>
            <FileUploader contentType="image"/>

            <section className='flex justify-center'>
                <div className='grid lg:grid-cols-4 gap-10 my-10 sm:grid-cols-1 md:grid-cols-3  '>
                    {images.map((image) =>
                        <div key={image.imageUrl||image.fileUrl} className="card card-compact sm:w-[30vw] md:w-[20vw] lg:w-[15vw] bg-base-100 shadow-xl">
                            <figure className='max-h-[15rem]'>
                                <img src={image.imageUrl} alt="Image" />
                            </figure>

                            <div className="card-body">
                                <p>Date: {image.addedOn.toLocaleDateString()}</p>

                                <div className="icon-container flex gap-1">
                                    <i className="text-stone-dark transition-colors duration-300 hover:text-teal-accent-400 cursor-pointer">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                        </svg>
                                    </i>
                                    <i className="text-stone-dark transition-colors duration-300 hover:text-teal-accent-400 cursor-pointer">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                            <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                        </svg>
                                    </i>
                                    <i className="text-stone-dark transition-colors duration-300 hover:text-teal-accent-400 cursor-pointer">
                                        <svg viewBox="0 0 16 16" fill="currentColor" className="h-5">
                                            <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />                                    </svg>

                                    </i>
                                    <i className="text-stone-dark transition-colors duration-300 hover:text-teal-accent-400 cursor-pointer">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tiktok" viewBox="0 0 16 16"> <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                                        </svg>
                                    </i>
                                    <i className="text-stone-dark transition-colors duration-300 hover:text-teal-accent-400 cursor-pointer">
                                        <svg viewBox="0 0 32 32" fill="currentColor" className="h-5">
                                            <path d="M15.198 0.005c-2.568 0.031-8.089 0.453-11.177 3.286-2.297 2.276-3.099 5.641-3.193 9.802-0.078 4.146-0.172 11.932 7.333 14.052v3.229c0 0-0.047 1.292 0.807 1.557 1.052 0.333 1.651-0.661 2.651-1.729l1.865-2.109c5.135 0.427 9.068-0.557 9.521-0.703 1.042-0.333 6.911-1.083 7.87-8.87 0.984-8.042-0.479-13.109-3.12-15.401h-0.016c-0.797-0.734-4-3.068-11.156-3.094 0 0-0.531-0.036-1.385-0.021zM15.286 2.266c0.729-0.005 1.172 0.026 1.172 0.026 6.057 0.016 8.948 1.839 9.63 2.453 2.224 1.906 3.37 6.474 2.531 13.188-0.797 6.51-5.557 6.922-6.438 7.203-0.375 0.12-3.839 0.974-8.203 0.693 0 0-3.25 3.922-4.266 4.932-0.161 0.177-0.349 0.229-0.469 0.203-0.172-0.042-0.224-0.255-0.214-0.547l0.031-5.359c-6.365-1.76-5.99-8.401-5.922-11.87 0.078-3.469 0.729-6.307 2.667-8.229 2.609-2.359 7.297-2.677 9.479-2.693zM15.766 5.734c-0.219-0.005-0.401 0.177-0.401 0.396 0 0.224 0.182 0.401 0.401 0.401 2.005-0.036 3.938 0.724 5.375 2.12 1.453 1.411 2.161 3.307 2.188 5.786 0 0.219 0.177 0.401 0.401 0.401v-0.016c0.219 0 0.401-0.177 0.401-0.396 0.099-2.359-0.776-4.651-2.417-6.349-1.583-1.547-3.589-2.344-5.948-2.344zM10.495 6.651c-0.281-0.042-0.573 0.016-0.818 0.161h-0.021c-0.542 0.318-1.047 0.719-1.526 1.255-0.365 0.422-0.563 0.849-0.615 1.26-0.031 0.245-0.010 0.49 0.063 0.724l0.026 0.016c0.411 1.208 0.948 2.37 1.604 3.464 0.844 1.536 1.885 2.958 3.094 4.229l0.036 0.052 0.057 0.042 0.036 0.042 0.042 0.036c1.276 1.214 2.698 2.255 4.24 3.109 1.76 0.958 2.828 1.411 3.469 1.599v0.010c0.188 0.057 0.359 0.083 0.531 0.083 0.547-0.042 1.063-0.26 1.469-0.63 0.521-0.469 0.932-0.984 1.24-1.531v-0.010c0.307-0.578 0.203-1.125-0.24-1.495-0.885-0.776-1.849-1.464-2.865-2.057-0.682-0.37-1.375-0.146-1.656 0.229l-0.599 0.755c-0.307 0.375-0.865 0.323-0.865 0.323l-0.016 0.010c-4.161-1.063-5.271-5.276-5.271-5.276s-0.052-0.573 0.333-0.865l0.75-0.604c0.359-0.292 0.609-0.984 0.224-1.667-0.589-1.021-1.276-1.979-2.052-2.865-0.167-0.208-0.406-0.349-0.672-0.401zM16.458 7.839c-0.531 0-0.531 0.802 0.005 0.802 1.333 0.021 2.604 0.573 3.531 1.531 0.844 0.932 1.281 2.172 1.198 3.427 0.005 0.219 0.182 0.396 0.401 0.396l0.016 0.021c0.219 0 0.401-0.182 0.401-0.401 0.036-1.589-0.458-2.922-1.427-3.99-0.974-1.068-2.333-1.667-4.068-1.786-0.021 0-0.036 0-0.057 0zM17.115 9.995c-0.547-0.016-0.568 0.802-0.026 0.818 1.318 0.068 1.958 0.734 2.042 2.104 0.005 0.219 0.182 0.391 0.396 0.391h0.016c0.224-0.010 0.401-0.203 0.385-0.427-0.094-1.786-1.068-2.792-2.797-2.885-0.005 0-0.010 0-0.016 0z" />
                                        </svg>
                                    </i>
                                </div>

                                <div className='buttons mt-3'>
                                    <button class="py-1 px-2 rounded-l bg-stone hover:bg-stone-dark text-white border-stone mr-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path>
                                        </svg>
                                    </button>
                                    <button class="py-1 px-2  bg-stone-bold hover:bg-stone-dark text-white border-stone -ml-1">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                        </svg>
                                    </button>
                                </div>
                                <button className="w-1/3 py-1 px-2 rounded bg-stone hover:bg-stone-dark text-white border-stone -ml-1">Download!</button>

                            </div>
                        </div>
                    )}
                </div>

            </section>

        </Layout>
    )
}

export default ImagePage;