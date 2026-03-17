
import { motion } from "framer-motion";

import { TypeAnimation } from "react-type-animation";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Hero() {

  const particles = Array.from({ length: 200});
  const { theme } = useContext(ThemeContext);
  const particleColor = theme === "dark" ? "bg-white" : "bg-green-400";


  return (
    <section id="home" className="relative  min-h-screen flex justify-center items-center text-white overflow-hidden">

      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        {particles.map((_, i) => (
          <motion.span
            key={i}
         
            className={`absolute ${particleColor} rounded-full`}
            style={{
              width: "4px",
              height: "4px",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{ y: [0, 40, 0], opacity: [0.3, 1, 0.3] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>
      

      {/* Hero Content */}
      <div className="relative z-10 text-center">


                 <motion.h1
          className="text-5xl font-bold"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          <span className="text-white mr-2 text-4xl md:text-6xl lg:text-[100px]">Hi, I'm</span>&nbsp;
          <span className="text-green-400 text-4xl md:text-6xl lg:text-[100px]" >Madiha</span>
        </motion.h1>

            
       
      
        <div className="text-xl md:text-2xl lg:text-[50px]  mt-4 font-semibold flex justify-center gap-2">
            <span className="text-white">And I'm</span>

  <span className="text-green-400 inline-block min-w-[200px] text-left "   style={{ fontFamily: "Playfair Display" }}>

    <TypeAnimation
      sequence={[
        "an Innovator",
        1500,
        "",
        " A Web Developer",
        1500,
        "",
        " A Problem Solver",
        1500,
        "",
      ]}
      
       speed={200}
      deletionSpeed={200}      
      repeat={Infinity}
      cursor={true}
    />

  </span>

</div>

       

        <motion.a
         href="https://www.linkedin.com/in/madiha-syed-b59142368"
  target="_blank"
  rel="noopener noreferrer"
          className="inline-block mt-6 px-6 py-3 bg-green-400 rounded-lg hover:drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]" style={{fontFamily:"Playfair Display"}}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>

      </div>
    </section>
  );
}