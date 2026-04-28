import React, { useState } from 'react';
import Nav from '../components/Nav'
import BarChart from '../components/BarChart'
import { useLocation } from "react-router-dom";


function Dashboard() {

  const location = useLocation();
  const result = location.state;

  const score = result.result.fairnessScore;

   let scoreColor = "";
  let bgColor = "";
  let tag="";
  let tagColor="";
  let tagTextColor="";

if (score >= 80) {
  scoreColor = "text-green-800";
  bgColor = "bg-green-200";
  tag="Fair";
  tagColor="bg-green-800";
  tagTextColor="text-green-200";
} else if (score >= 50) {
  scoreColor = "text-yellow-800";
  bgColor = "bg-yellow-200";
  tag="Moderate";
   tagColor="bg-yellow-800";
  tagTextColor="text-yellow-200";
} else {
  scoreColor = "text-red-800";
  bgColor = "bg-red-200";
  tag="bias";
   tagColor="bg-red-800";
   tagTextColor="text-red-200";
}

//conect ai api
const [explainText, setExplainText] = useState("");
const [suggestText, setSuggestText] = useState("");
const [showExplain, setShowExplain] = useState(false);
const [showSuggest, setShowSuggest] = useState(false);
const [loadingExplain, setLoadingExplain] = useState(false);
const [loadingSuggest, setLoadingSuggest] = useState(false);

const handleExplain=async()=>{
   try {
    setLoadingExplain(true);
    setShowExplain(true);
  const res= await fetch(`${import.meta.env.VITE_API_URL}/FairAI/ai/explain`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      maleRate:result.result.maleSelectionRate,
      femaleRate:result.result.femaleSelectionRate
    })
  });
  const data= await res.json();
  setExplainText(data.text);
  
   } catch (err) {
    console.error(err);
  } finally {
    setLoadingExplain(false);
  }
} 

const handleSuggest=async()=>{
   try {
    setLoadingSuggest(true);
    setShowSuggest(true);
  const res= await fetch(`${import.meta.env.VITE_API_URL}/FairAI/ai/suggest`,{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    },
    body:JSON.stringify({
      maleRate:result.result.maleSelectionRate,
      femaleRate:result.result.femaleSelectionRate
    })
  });
  const data= await res.json();
  setSuggestText(data.text);
  

    } catch (err) {
    console.error(err);
  } finally {
    setLoadingSuggest(false);
  }
} 


  return (
    <div className=' w-full min-h-screen bg-[#F3F4F6]'>
      <Nav/>

      <div className='flex items-center justify-center  flex-col  '>
          <h1 className='text-[#2563EB] text-center   text-5xl font-extrabold mt-10 '>Bias Analysis Dashboard</h1>
           <div className={`w-[60%] h-[50px] ${bgColor} shadow-lg rounded-full mt-5 pt-3 pl-6`}>
              <h1 className={`${scoreColor} font-bold text-xl`}>{result.result.biasStatus}</h1>
              

           </div>

           <div className='flex flex-wrap  gap-5 mt-10  w-full pl-3'>
              <div className='w-[500px] h-[400px] bg-white shadow-lg rounded-lg flex items-center justify-center'>
               <BarChart
                maleRate={result.result.maleSelectionRate}
                femaleRate={result.result.femaleSelectionRate}
               />
               </div>
              
              <div className='flex  flex-col'>
                <div className=' flex gap-5'>
                 <div className={`w-[300px] h-[200px] ${bgColor} rounded-lg shadow-lg `}>
                <h1 className={`${scoreColor} text-2xl font-bold text-center mt-2`}>Fairness score</h1>
                <p className={`text-center text-lg ${tagColor} ${tagTextColor} mt-1 font-semibold` }>{tag}</p>
                <h1 className={`${scoreColor} text-8xl font-bold mt-7 flex items-center justify-center flex-col`}>{result.result.fairnessScore}</h1>
                 </div>

                  <div className='w-[600px] h-[90px] bg-white rounded-full shadow-lg pt-2 pl-6'>
                    <h1 className='text-xl text-[#4B5563] font-semibold  '>Selection Rate</h1>
                    <p className='text-md   pl-2 text-[#4B5563] tracking-tighter'>Male: {result.result.maleSelectionRate}%   </p>
                     <p className='text-md pl-2  text-[#4B5563] tracking-tighter'>Female: {result.result.femaleSelectionRate}% </p>
                  </div>
                   
                  
                </div>
                 
                  <div className=' flex items-center justify-center gap-5 mt-5'>
                  <button 
                   onClick={handleExplain}
                   className='bg-[#2563EB] text-white font-semibold rounded-full text-2xl w-[200px] h-[50px] shadow-2xl hover:shadow-md ' > {loadingExplain ? "Loading..." : "Explain"}</button>
                  <button 
                   onClick={handleSuggest}
                   className='bg-[#2563EB] text-white font-semibold rounded-full text-2xl w-[200px] h-[50px] shadow-2xl hover:shadow-md '>{loadingSuggest ? "Loading..." : "Suggestions"}</button>
                 </div>

                 <div className='flex flex-wrap gap-6 mt-3'>

                   <div className={`w-[450px] h-[170px] bg-white shadow-lg rounded-md overflow-auto noScroll ${showExplain ? "block" : "hidden"}`} >
                       <h1 className='text-xl text-[#2563EB] p-2 font-bold'>Explain</h1>
                       {loadingExplain ? (
                         <div className="flex items-center gap-2 text-gray-500 pl-3 pt-4">
                           <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                           Generating explanation...
                         </div>
                        ) : (
                         <p className='text-gray-700 mt-2 whitespace-pre-line pl-2 pt-3 tracking-tight'>
                           {explainText}
                         </p>
                        )}
                     </div>

                  <div className={`w-[450px] h-[170px] bg-white shadow-lg rounded-md overflow-auto noScroll ${showSuggest ? "block" : "hidden"}`}>
                     <h1 className='text-xl text-[#2563EB] p-2 font-bold'>Suggestion</h1>
                     {loadingSuggest ? (
                       <div className="flex items-center gap-2 text-gray-500 pl-3 pt-4">
                         <div className="w-4 h-4 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
                         Generating suggestions...
                       </div>
                      ) : (
                       <p className='text-gray-700 mt-2 whitespace-pre-line pl-2 pt-3 tracking-tight'>
                         {suggestText}
                       </p>
                      )}
                   </div>

                 </div>
                

              </div>

              
           </div>

      </div>

    </div>
  )
}

export default Dashboard