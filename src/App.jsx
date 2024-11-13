import React,{ Suspense } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
const Home = React.lazy(() =>  import("./components/Home")) 
const Experience = React.lazy(() => import("./components/Experience"))
const Projects = React.lazy(() => import("./components/Projects")) 

export default function App() {
  return (
    <div className="bg-cyan-500 min-h">
      <div className="bg-zinc-400 m-32">
       <Card/> 
      </div>
    </div>
  ) 
}

function Card(){
  return (
    <>
    <BrowserRouter>
        <Appbar/>
        <Suspense fallback={<div>Loading....</div>}>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/experience" element={<Experience/>}/>
            <Route path="/projects" element={<Projects/>}/>
        </Routes>
        </Suspense>
    </BrowserRouter>
    </>
  ) 
}

function Appbar(){
  const naviagte = useNavigate();

    return <div className="flex justify-between">
      <div>
      <div className="flex justify-between">
        <div>
        <button onClick={() => {
         naviagte("/");
        }}>home</button>
        </div>
        <div>
        <button onClick={() => {
          naviagte("/experience");
          }}>experience</button>
        </div>
        <div> 
          <button onClick={() => {
          naviagte("/projects");
        }}>projects</button>
        </div>
      </div>
      </div>
     

      <div>
      <button onClick={() => {
        window.open("https://sulkurl.com/cIo", "_blank");
        }}>resume</button>
      </div>
    
  
    

    {/* <button onClick={() => {
      const link = document.createElement("a");
      link.href = "/path-to-your-resume.pdf"; // Replace with your file path
      link.download = "resume.pdf"; // Optional: specify a download filename
      link.click();
    }}>
    Resume
    </button> */}

    </div>
}
 
