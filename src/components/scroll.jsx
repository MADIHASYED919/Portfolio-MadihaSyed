import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollTop}
      className="group fixed bottom-6 right-6 flex items-center
      bg-green-400 text-black rounded-full px-4 py-3
      shadow-lg hover:shadow-[0_0_40px_rgba(34,197,94,0.9)]
      transition-all duration-300"
    >
      <FaArrowUp />

      {/* Hidden text */}
      <span className=" opacity-0 max-w-0 overflow-hidden
      group-hover:opacity-100 group-hover:max-w-[120px]
      transition-all duration-300 whitespace-nowrap">
        Back to Top
      </span>
    </button>
  );
}