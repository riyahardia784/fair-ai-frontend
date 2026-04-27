import React ,{useState} from 'react'
import UploadForm from '../components/UploadForm'
import Nav from '../components/Nav'
import PreviewPanel from '../components/PreviewPanel'
import Loading from '../components/Loading';

function Upload() {
    const [previewData, setPreviewData] = useState([]);
    const [loading, setLoading] = useState(false);

  return (
    <div className='w-full min-h-screen bg-[#F3F4F6] '>
      <Nav/>
      <h1 className='text-[#2563EB] text-center   text-5xl font-extrabold mt-10 '>Upload Dataset</h1>
      <p className='text-lg p-2 text-center text-[#4B5563] tracking-tight mt-2'>Upload your hiring dataset to analyze bias</p>
       <div className=' mt-6 w-full   flex  items-center  justify-center gap-6 '>
          
          <UploadForm setPreviewData={setPreviewData}
          setLoading={setLoading} />

          <PreviewPanel
            previewData={previewData}
            onClose={() => setPreviewData([])}
         />
       </div>
       
       {loading &&  <Loading/>}
       
     </div>
    
  )
}

export default Upload