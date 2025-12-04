// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import AboutUs from './pages/About';
import Training from './pages/Training';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import SiteMap from './pages/SiteMap';
const App = () => {
  return (
    <Routes>
      {/* The Layout route wraps all pages that need the Navbar/Footer */}
      <Route element={<Layout />}>
        
        {/* Child routes will replace the <Outlet /> in Layout.jsx */}
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/training' element={<Training />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/sitemap' element={<SiteMap />} />
        
        
      </Route>
    </Routes>
  );
};

export default App;