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
import ImageHome from './pages/Media/ImageHome';
import Album from './components/Media-Collections/Album';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/media-collection' element={<MediaCollections />} />
            <Route path='/logos' element={<LogoPage />} />

            <Route path='/images' element={<ImagePage/>}/>
            
            {/* this route will match any path that follows the pattern '/something', where 'something' is the value of the :album parameter. 
            when a route matches the pattern, it will render the Album component.*/}
            <Route path=':album/*' element={<Album />} /> 
                    
            <Route path='/videos' element={<VideoPage />} />

          <Route path='/editable-templates' element={<EditableTemplates />} />
            <Route path='/editable-templates/business-cards' element={<BusinessCard />} />

          <Route path='/Steps/social-media' element={<SocialMedia />} />
        </Routes>
      </Router>
    </>

  );
}

export default App;
