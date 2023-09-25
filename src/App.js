import './styles/tailwind.css';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from './pages/Home';
import MediaCollections from './pages/Media/MediaCollections';
import EditableTemplates from './pages/Editables/EditableTemplates';
import SocialMedia from './pages/SocialMedia';
import BusinessCard from './components/Editable-Templates/BusinessCard';
import LogoPage from './pages/Media/LogoPage';
import ImagePage from './pages/Media/ImagePage';
import VideoPage from './pages/Media/VideoPage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/media-collection' element={<MediaCollections />} />
            <Route path='/media-collection/logos' element={<LogoPage />} />
            <Route path='/media-collection/images' element={<ImagePage />} />
            <Route path='/media-collection/videos' element={<VideoPage />} />

          <Route path='/editable-templates' element={<EditableTemplates />} />
            <Route path='/editable-templates/business-cards' element={<BusinessCard />} />

          <Route path='/Steps/social-media' element={<SocialMedia />} />


        </Routes>
      </Router>

      {/* <Social /> */}

    </>

  );
}

export default App;
