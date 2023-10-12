import './styles/tailwind.css';
import { Routes, Route, BrowserRouter as Router, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MediaCollections from './pages/Media/MediaCollections';
import EditableTemplates from './pages/Editables/EditableTemplates';
import SocialMedia from './pages/SocialMedia';
import BusinessCard from './components/Editable-Templates/BusinessCard';
import LogoPage from './pages/Media/LogoPage';
import ImagePage from './pages/Media/ImagePage';
import VideoPage from './pages/Media/VideoPage';
import Album from './components/Media-Collections/Album';


const albumTypeImages = 'images';
const albumTypeLogos = 'logos';
const albumTypeVideos = 'videos';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />

          <Route path="/images" element={<ImagePage  />} />
          <Route path="/logos" element={<LogoPage  />} />
          <Route path="/videos" element={<VideoPage  />} />

          {/* Route to display the content in the album */}
          <Route path='/:albumType/:album' element={<Album />} />

          <Route path='/editable-templates' element={<EditableTemplates />} />
          <Route path='/editable-templates/business-cards' element={<BusinessCard />} />

          <Route path='/Steps/social-media' element={<SocialMedia />} />
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;
