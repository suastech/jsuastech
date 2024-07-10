import './App.css'
import {Routes, Route, useLocation}  from 'react-router-dom';
import Navbar from './components/Navbar';

import PDFViewer from './components/PDFViewer';
import Coding from './pages/Coding';
import Academia from './pages/Academia';
import Home from './pages/Home';
import ContactButtons from './components/ContactButtons';

function App() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <> 
      {!isHome && 
      <>
        <Navbar/>
        <ContactButtons/>
      </>
      }
      
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/coding" element={<Coding/>}  />
        <Route path="/academia" element={<Academia/>} />
        <Route path="/cv/:type" element={<PDFViewer/>} />
      </Routes>


    </>
  )
}

export default App
