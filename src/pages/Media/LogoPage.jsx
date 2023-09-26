import React from 'react';
import Layout from '../../Layout.';
import FileUploader from '../../components/FileUploader';
import useFirestore from '../../firebase/useFirestore';

function LogoPage() {
  const { docs: logos, isLoading } = useFirestore('logos');

  if (isLoading) {
    return (
        <div className='text-center mt-48 '>
            <progress className="progress w-1/4"></progress>
        </div>
    )
}

  return (
    <Layout>
      <FileUploader logos={logos} />
      
      <section className='flex justify-center'>
        <div className='grid lg:grid-cols-4 gap-10 my-10 sm:grid-cols-1 md:grid-cols-3'>
          {logos.map((logo) => (
            <div key={logo.fileUrl} className='card card-compact sm:w-[30vw] md:w-[20vw] lg:w-[15vw] bg-base-100 shadow-xl'>
              <img src={logo.fileUrl} alt='Logo' />

              <div className='card-body'>
                <p>Date: {logo.addedOn.toLocaleDateString()}</p>
                {/* Additional actions for logos */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default LogoPage;
