import React ,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { demoDatasets } from '../data/demoData';



function UploadForm({ setPreviewData }) {

  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const [demoType, setDemoType] = useState("");
  

  const handleDemoChange = (e) => {
    const type = e.target.value;
    setDemoType(type);
     setPreviewData(demoDatasets[type] || []);
  };

const handleUpload=async()=>{
  try{
    //case1
     if (demoType) {
      const demoData = demoDatasets[demoType];

      const res = await fetch("http://localhost:5000/FairAI/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ data: demoData })
      });

      const data = await res.json();
      navigate("/dashboard", { state: data });
      return;
    }
    //case 2

    if (!file) {
      alert("Please select a file");
      return;
    }
  
  const formData=new FormData();
  formData.append("csvData",file);
  
  const res= await fetch("http://localhost:5000/FairAI/analyze",{
    method: "POST",
    body: formData
  });
  const data= await res.json();
  navigate("/dashboard",{state:data});
  }catch(error){
    console.error(error);
    alert("Something went wrong");
  }
};

  return (
    <div className='w-[30%] min-h-[400px] bg-white rounded-lg flex items-center justify-center flex-col shadow-lg'>
       <label className='flex items-center justify-center cursor-pointer bg-transparent border border-[#2563EB] text-xl rounded-full w-[300px] h-[50px] font-semibold text-[#4B5563] hover:bg-[#2563EB] hover:text-white transition-all'>
          <span>Choose a File</span>
          <input 
            type='file' 
            onChange={(e) => setFile(e.target.files[0])} 
            className="hidden" 
          />
        </label>
       
        <p className='mt-5 text-[#4B5563]'>Supported format: CSV</p>
        <div className='flex items-center justify-center gap-4 text-[#4B5563]'>
           <h5>Select Atribute</h5>
           <select id='attribute' name='attribute'>
            <option value="Gender"> Gender</option>
           </select>

        </div>

         <div className='mt-4 flex items-center justify-center gap-4'>
          <h5 className='text-lg tracking-tight text-[#2563EB] font-semibold'>Demo Dataset</h5>
          <select 
           className='border-2 border-[#2563EB] rounded-full pl-2 text-[#4B5563] ' name='demo' id="demoDataset"
            value={demoType} 
            onChange={handleDemoChange}>
             <option value="">Select dataset</option> 
            <option value="fair">noBias</option>
            <option value="moderate">ModrateBias</option>
            <option value="high">highBias</option>
          </select>
        </div>
  
          
          

        <button
         type='submit'
         onClick={handleUpload}
         className=' bg-[#2563EB] text-white font-semibold rounded-full text-2xl w-[200px] h-[50px] shadow-2xl hover:shadow-md mt-12'>Analyze Bias
         </button>
      
    </div>
  )
}

export default UploadForm