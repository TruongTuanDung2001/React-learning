import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  App,
  MapProduct,
  ExpReact1,
  ExpReact2,
  Conditional,
  Effect,
  ExpEffect
} from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App />
    <MapProduct /> */}
    {/* <ExpReact1 /> */}

    {/* là 1 function được lấy trong App.jsx */}
    {/* <ExpReact2 /> */}

    {/* ConditionalRendering */}
    {/* <Conditional /> */}

    {/* Use Effect */}
    {/* <Effect /> */}

    {/* Exp useEffect */}
    <ExpEffect />
  </StrictMode>,
);
