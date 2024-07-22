import './App.css'
import {Routes, Route}  from 'react-router-dom';
import Navbar from './components/Navbar';
import Coding from './components/Coding';
import Academia from './components/Academia';
import PDFViewer from './components/PDFViewer';

import WelcomeCard from './components/WelcomeCard';
import SideMenu from './components/SideMenu';

function App() {

  return (
    <> 
{/*       <WelcomeCard/>
 */}
      <Navbar/>
      <SideMenu/>
      
      <Routes>
        <Route path="/" element={<Coding/>}  />
        <Route path="/academia" element={<Academia/>} />
        <Route path="/cv/:type" element={<PDFViewer/>} />
      </Routes>


    </>
  )
}

export default App
