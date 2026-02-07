import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Apply theme before React renders to prevent flash
const root = document.documentElement;
const storedTheme = localStorage.getItem("theme") || "light";
if (storedTheme === "light") {
  root.classList.remove("dark");
} else {
  root.classList.add("dark");
}

createRoot(document.getElementById("root")!).render(<App />);
  