import { motion } from "framer-motion";

// const Frontendskills = [
//   "HTML",
//   "CSS",
//   "JavaScript",
//   "React",
//   "Next JS",
//   "Tailwind CSS",
//   "Material UI",
//   "shadcn /ui",
//   "Bootstrap",

  
// ];
import { FaHtml5, FaCss3Alt, FaReact, FaNode,FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const Frontendskills = [
  { name: "HTML", icon: <FaHtml5 size={26} /> },
  { name: "CSS", icon: <FaCss3Alt size={26} /> },
  { name: "JavaScript", icon: <SiJavascript size={26} /> },
  { name: "React", icon: <FaReact size={26} /> },
  { name: "Next JS", icon: <SiNextdotjs size={26} /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss size={26} /> },
  { name: "Bootstrap", icon: <FaBootstrap size={26} /> },
 


];
import { GrMysql } from "react-icons/gr";
import { FaServer,FaGitAlt,FaCloud } from "react-icons/fa";
import { SiMongodb,SiExpress,SiMysql } from "react-icons/si";
const Backendskills = [
   { name: "MYSQL", icon: <GrMysql   size={26} /> },
   { name: "MongoDB", icon: <SiMongodb   size={26} /> },
    { name: "Node.js", icon: <FaNode  size={26} /> },
    { name: "Express.js", icon: <SiExpress   size={26} /> },
    { name: "MySQL", icon: <SiMysql size={26} /> },
    { name: "REST API", icon: <FaServer size={26} /> },
    { name: "Git", icon: <FaGitAlt size={26} /> },
    { name: "Cloud", icon: <FaCloud size={26} /> },

];

//  const particles = Array.from({ length: });


export default function Skills() {
  return (
    
    // <section id="skills" className="relative min-h-screen flex justify-center items-center text-white overflow-hidden bg-black">
 <section
  id="skills"
  className="relative z-10 min-h-screen flex flex-col justify-center items-center text-white overflow-hidden bg-black"
>

{/* Green Light Background */}
<div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.25),_transparent_70%)]"></div>

{/* <div className="relative z-10 w-full"></div> */}
      {/* <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,0,0,0.15)_0%,_transparent_70%)]"></div> */}

      <div className="w-full h-full">
       
  <h1 className="text-5xl font-bold text-center mb-16">
  The <span className="text-green-400">Tech Stack</span>
</h1>

      {/* ROW 1 */}
      <div className="overflow-hidden">
        <div className="flex gap-6 w-max marquee-left pause mt-10 mb-6">

          {[...Frontendskills,...Frontendskills,...Frontendskills].map((skill, index) => (
  <div
    key={index}
    className=" group flex items-center gap-4 px-10 py-6 bg-zinc-900/70 backdrop-blur-lg
    rounded-2xl border border-green-500
    transition-all duration-300
    hover:shadow-[0_0_10px_rgba(34,197,94,0.9)]
    hover:-translate-y-2"
  >
    <span className="text-green-400 text-3xl transition-all duration-300
    group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]">{skill.icon}</span>

    <div className="flex flex-col">
      <span className="font-semibold">{skill.name}</span>
      <span className="text-xs text-gray-400">TECHNOLOGY</span>
    </div>
  </div>
))}

        </div>
      </div>

      {/* ROW 2 */}

      <div className="overflow-hidden ">
        <div className="flex gap-6 w-max marquee-right pause mt-10 mb-6">

          {[...Backendskills, ...Backendskills,...Backendskills,...Backendskills,...Backendskills].map((skill, index) => (
            <div
              key={index}
                className=" group flex items-center gap-4 px-10 py-6 bg-zinc-900/70 backdrop-blur-lg
    rounded-2xl border border-green-500
    transition-all duration-100
    hover:shadow-[0_0_10px_rgba(34,197,94,0.9)]
    hover:-translate-y-2"
            >
               <span className="text-green-400 text-3xl transition-all duration-300
    group-hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]">{skill.icon}</span>
 <div className="flex flex-col">
      <span className="font-semibold">{skill.name}</span>
      <span className="text-xs text-gray-400">TECHNOLOGY</span>
    </div>


            
            </div>
          ))}

        </div>
      </div>

      </div>


    </section>
  );
}