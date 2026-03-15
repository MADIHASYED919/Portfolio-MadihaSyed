import { useState, useEffect } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      className="fixed pointer-events-none z-0"
      style={{
        left: position.x - 200,
        top: position.y - 200,
      }}
    >
      <div
        className="w-[500px] h-[500px] rounded-full"
        style={{
          background: "rgba(34, 212, 82, 0.35)",
        }}
      ></div>
    </div>
  );
}