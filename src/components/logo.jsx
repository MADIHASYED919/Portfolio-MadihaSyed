//  import { motion } from "framer-motion";
// function Logo() {
//   return (
//     <>
    
//      <motion.div className="relative text-green-400 rotate-[-20deg]">
//       {/* Squares around logo */}
//       <div className="absolute -left-6 -top-2 w-4 h-4 border-2 border-green-400 rotate-45"></div>
//       <div className="absolute -left-1 top-6 w-3 h-3 border-2 border-green-400 rotate-45"></div>
//       <div className="absolute right-6 -top-3 w-4 h-4 border-2 border-green-400 rotate-45"></div>
//       <div className="absolute right-0 top-6 w-3 h-3 border-2 border-green-400 rotate-45"></div>

//       {/* Name */}
//       initial={{ opacity: 0, y: -30 }}
//       animate={{ opacity: 1, y: 0 }}
//       transition={{ duration: 0.8 }}
//       style={{ fontFamily: "Great Vibes" }}
//       className="text-3xl font-bold text-green-400
//       drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
//        Madiha Syed
    
//     </motion.div>
    


//     {/* // <motion.div
//     //   initial={{ opacity: 0, y: -30 }}
//     //   animate={{ opacity: 1, y: 0 }}
//     //   transition={{ duration: 0.8 }}
//     //   className="text-3xl font-bold text-green-400
//     //   drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
//     // >

//     //   &lt;Sajid /&gt;

//     // </motion.div> */}

//     </>
   


//   );
// }

// export default Logo;
import { motion } from "framer-motion";

function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.1 }}
      transition={{ duration: 0.8 }}
      className="relative text-green-400 rotate-[-20deg] mt-2"
    >
      
      {/* Squares */}
      <div className="absolute -left-6 -top-2 w-4 h-4 border-2 border-green-400 rotate-45"></div>
      <div className="absolute -left-1 top-6 w-3 h-3 border-2 border-green-400 rotate-45"></div>
      <div className="absolute right-6 -top-3 w-4 h-4 border-2 border-green-400 rotate-45"></div>
      <div className="absolute right-0 top-6 w-3 h-3 border-2 border-green-400 rotate-45"></div>

      {/* Name */}
      <span
        style={{ fontFamily: "Great Vibes" }}
        className="text-2xl font-bold drop-shadow-[0_0_10px_rgba(34,197,94,0.9)]"
      >
        Madiha Syed
      </span>

    </motion.div>
  );
}

export default Logo;
