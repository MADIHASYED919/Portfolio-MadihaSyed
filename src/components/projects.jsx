
  import { motion } from "framer-motion";
  import bus from "../assets/projects/BusBooking.png"
  import resume from "../assets/projects/Interactive_Resume_Builder.png"
  import portfolio from "../assets/projects/Portfolio_website.png"

const projects = [
  {
    title: "Bus Booking Website",
    desc: "Responsive bus booking platform with search and booking system.",
    image: bus,
    github: "https://github.com/MADIHASYED919/online-booking",
    demo: "https://madihasyed919.github.io/online-booking/",
  },
  {
    title: "Portfolio Website",
    desc: "My portfolio website featuring my projects, skills, and journey. Built with React.js for a modern, interactive Experience",
    image: portfolio,
    github: "#",
    demo: "#",
  },
  {
    title: "Resume Builder",
    desc: "Allows you to build a small and Interactive Resume build",
    image: resume,
    github: "https://github.com/MADIHASYED919/Interactive-Resume-Builder",
    demo: "https://madihasyed919.github.io/Interactive-Resume-Builder/",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative bg-black text-white py-20 px-6"
    >
      <h1 className="text-5xl font-bold text-center mb-20">
        My <span className="text-green-400">Projects</span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            whileHover={{ y: -10 }}
            className="bg-zinc-900 rounded-xl overflow-hidden  shadow-lg hover:shadow-[0_0_10px_rgba(34,197,94,0.7)] transition"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                  loading="lazy"
                className="w-full h-48 object-cover hover:scale-110 transition duration-500"
              />
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="text-xl text-green-400 font-semibold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-4">
                {project.desc}
              </p>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.demo}
                  className="px-4 py-2 bg-green-400 text-black rounded-lg hover:scale-105 transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  className="px-4 py-2 border border-green-400 rounded-lg hover:bg-green-400 hover:text-black transition"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}