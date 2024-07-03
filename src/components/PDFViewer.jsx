import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { useNavigate, useParams } from 'react-router-dom';
import back from '../assets/images/back.png'

const PDFViewer = () => {
  const {type} = useParams()
  const fileSource = type === "coding"? '/cv-coding.pdf' : '/cv-academia.pdf'
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  const navigate = useNavigate()

  function handleBack() {
    navigate(type === "coding"? '/' : '/academia'  )
  }

  return (
    <div className='view-cv content-page'>
      <img src={back} className='back-button' onClick={handleBack}/>
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={fileSource} plugins={[defaultLayoutPluginInstance]} defaultScale={1}  />
      </Worker>
    </div>
  );
};

export default PDFViewer;
