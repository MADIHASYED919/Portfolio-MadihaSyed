
import { motion } from "framer-motion";
import "./journey.css";

export default function Journey() {

  const journeyData = [
    {
      title: "Internship In Vaults Of Code ",
    
      info: "Bangalore (June 2025 - July 2025)",
      desc: "Worked on Full Stack Web Development Projects and Responsive Design.",
    },
    {
      title: "BCA – Computer Applications",
      info: "Yogi Vemana University, Andhra Pradesh (2023 - 2026)",
      desc: "Focused on full-stack development projects.",
    },
    {
      title: "High School",
      info: " Sri Hari Junior College, Andhra Pradesh (2020-2022)",
      desc: "Developed interest in programming and web development.",
    }
  ];

  return (
    <section id="journey" className=" relative  z-10 bg-black text-white py-20 px-4">


 
  

 {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.25),_transparent_70%)] pointer-events-none"></div> */}
 <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(34,197,94,0.25),_transparent_70%)]"></div>

      <h1 className="text-5xl font-bold text-center text-white mb-20">
        My <span className="text-green-400">Journey</span>
      </h1>
   
      

      <div className="relative max-w-5xl mx-auto">

        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 h-full w-[3px] md:bg-green-400 -translate-x-1/2"></div>

        {journeyData.map((item, index) => {

          const isLeft = index % 2 === 0;

          return (
            <div key={index} className="relative mb-20">

              {/* Node (Fixed) */}
              <div className="absolute left-1/2 top-6 w-4 h-4 md:bg-green-400 rounded-full -translate-x-1/2 z-10"></div>

              {/* Card Animation */}
              <motion.div
                initial={{ opacity: 0, x: isLeft ? -150 : 150 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.7 }}
                className={`flex ${isLeft ? "justify-end" : "justify-start"}`}
              >

                <div className="w-full md:w-[45%] bg-zinc-900 p-6 rounded-xl border border-green-500/30 shadow-lg hover:shadow-[0_0_10px_rgba(34,197,94,0.8)] hover:-translate-y-2 transition">

                  <h3 className="text-xl text-green-400 font-semibold mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {item.info}
                  </p>

                  <p className="text-gray-300 mt-2">
                    {item.desc}
                  </p>

                </div>

              </motion.div>

            </div>
          );
        })}

      </div>
    </section>
  );
}