import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

const MaterialUISwitch = styled(Switch)({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      color: "#fff",
      transform: "translateX(22px)",
    },
  },
  "& .MuiSwitch-thumb": {
    backgroundColor: "#001e3c",
    width: 32,
    height: 32,
  },
  "& .MuiSwitch-track": {
    opacity: 1,
    backgroundColor: "#aab4be",
    borderRadius: 20,
  },
});

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <MaterialUISwitch
      checked={theme === "dark"}
      onChange={toggleTheme}
    />
  );
}