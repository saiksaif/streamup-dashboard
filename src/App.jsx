import { Route, Routes } from 'react-router-dom';

import Dashboard from "./pages/Dashboard";
import Users from "./pages/Users"; 
import Agencies from "./pages/Agencies"; 
import Notifications from "./pages/Notifications"; 
import Transactions from "./pages/Transactions"; 
import Advertisements from "./pages/Advertisements"; 
import Newsfeeds from "./pages/Newsfeeds"; 
import Stories from "./pages/Stories"; 
import Banners from "./pages/Banners"; 
import Stores from "./pages/Stores"; 
import AudioStreaming from "./pages/AudioStreaming"; 
import VideoStreaming from "./pages/VideoStreaming"; 
import News from "./pages/News"; 
import Blogs from "./pages/Blogs"; 
import Subscribers from "./pages/Subscribers"; 
import Contacts from "./pages/Contacts"; 
import Faqs from "./pages/Faqs"; 
import NotFound from "./pages/NotFound";

import Layout from "./components/Layout";

import './App.css'

function App() {
  return (
      <Routes>
        <Route element={<Layout />}>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/users" element={<Users />} />
          <Route path="/agencies" element={<Agencies />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/advertisements" element={<Advertisements />} />
          <Route path="/news-feeds" element={<Newsfeeds />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/banners" element={<Banners />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/audio-streaming" element={<AudioStreaming />} />
          <Route path="/video-streaming" element={<VideoStreaming />} />
          <Route path="/news" element={<News />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/subscribers" element={<Subscribers />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/faqs" element={<Faqs />} />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
  );
}
export default App;