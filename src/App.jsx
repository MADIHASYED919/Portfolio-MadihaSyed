
import './App.css'
import { lazy, Suspense } from "react";


const Loading = lazy(() => import("./components/loadingAnimation"));
const Navbar = lazy(() => import("./components/Navbar"));


const About = lazy(() => import("./components/About"));
const Journey = lazy(() => import("./components/journey"));
const Skills = lazy(() => import("./components/skills"));
const Projects = lazy(() => import("./components/projects"));
const Contact = lazy(() => import("./components/contact"));
const Hero = lazy(() => import("./components/Hero"));
const BackToTop = lazy(() => import("./components/scroll"));
const Footer = lazy(() => import("./components/footer"));




function App() {
  
  return (
    <>
      {/* <h1 className='bg-gradient-to-r from-indigo-500 to-pink-800'>Hi!!</h1> */}
    {/* <CursorGlow/> */}
     
      <Loading/>
      
        <Navbar />
      
       

    <Hero/>
   
   <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
  <About />
</Suspense>
     <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
      <Journey/>
</Suspense>
      
        <Suspense fallback={<div className="text-white text-center">Loading...</div>}> <Skills/></Suspense>
       
    <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
          <Projects/>
</Suspense>
    <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
          
        <Contact/>
</Suspense>
    <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
        
        <Footer/>
</Suspense>
    <Suspense fallback={<div className="text-white text-center">Loading...</div>}>
        
         <BackToTop />
</Suspense>


    
        
      

  
       

    </>
  )
}

export default App


