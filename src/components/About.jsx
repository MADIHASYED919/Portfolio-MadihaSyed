// import Lottie from "lottie-react";
import { lazy, Suspense } from "react";

const Lottie = lazy(() => import("lottie-react"));
import developer from "../assets/developer.json";


export default function About() {
  return (
    <section id="about" className="relative min-h-screen bg-black text-white flex flex-col md:flex-row items-center justify-center px-6 md:px-16 gap-10">

    {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.25),_transparent_70%)] pointer-events-none"></div> */}

    <div className="absolute inset-0  bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.25),_transparent_70%)]"></div>


 <div className="w-full max-w-[480px]">
        {/* <Lottie animationData={developer} loop={true} /> */}
        <Suspense fallback={<div>Loading animation...</div>}>
  <Lottie animationData={developer} loop={true} />
</Suspense>
      </div>

      <div className="max-w-xl text-center md:text-left">

       


 <div className="max-w-2xl" id="about-text">
      <h2 className="text-3xl md:text-4xl font-semibold leading-snug mb-4">
        I'm <span className="text-green-400 font-bold">Madiha Syed</span>, a
        Full Stack Developer building creative and scalable web
        applications.
      </h2>

      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        I'm currently pursuing my Bachelors Of Computer Applications In Sri Hari Degree College at
        Yogi Vemana University, Andhra Pradesh. I specialize in both frontend and
        backend development, transforming ideas into functional digital
        experiences using modern technologies.
      </p>

      <p className="text-gray-300 text-lg leading-relaxed mb-6">
        I'm passionate about &nbsp;
        {/* <span className="text-[#1DCD9F] font-bold">JavaScript</span>, */}
        <span className="text-green-400 font-bold">JavaScript</span>,&nbsp;
        <span className="text-green-400 font-bold">React</span>,&nbsp;
        <span className="text-green-400 font-bold"> Node.js</span>,&nbsp;
        <span className="text-green-400 font-bold">MongoDB</span>,&nbsp; and bringing
        smooth, responsive UIs to life with animations and performance in
        mind. Outside of code, I love Reading Books and exploring Nature .
      </p>
      </div>


        

     

      </div>

    </section>
  );
}



 