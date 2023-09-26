import React from 'react';
import Layout from '../../Layout.';
import FileUploader from '../../components/FileUploader';
import useFirestore from '../../firebase/useFirestore';

function VideoPage() {
  const { docs: videos, isLoading } = useFirestore('videos');

  if (isLoading) {
      return (
          <div className='text-center mt-48 '>
              <progress className="progress w-1/4"></progress>
          </div>
      )
  }


  return (
    <Layout>
      <FileUploader videos={videos} />
      
      <section className='flex justify-center'>
        <div className='grid lg:grid-cols-4 gap-10 my-10 sm:grid-cols-1 md:grid-cols-3'>
          {videos.map((video) => (
            <div key={video.fileUrl} className='card card-compact sm:w-[30vw] md:w-[20vw] lg:w-[15vw] bg-base-100 shadow-xl'>
              <video controls>
                <source src={video.fileUrl} type='video/mp4' />
                Your browser does not support the video tag.
              </video>

              <div className='card-body'>
                <p>Date: {video.addedOn.toLocaleDateString()}</p>
                {/* Additional actions for videos */}
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
}

export default VideoPage;
