import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// react router dom
import { BrowserRouter } from "react-router-dom";

//
import "./index.css";
import {
  App,
  MapProduct,
  ExpReact1,
  ExpReact2,
  Conditional,
  Effect,
  ExpEffect,
  ApiUsers,
  ApiProducts,
  RouterDOM,
} from "./App.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  // <StrictMode>
  //   {/* <App />
  //   <MapProduct /> */}
  //   {/* <ExpReact1 /> */}

  //   {/* là 1 function được lấy trong App.jsx */}
  //   {/* <ExpReact2 /> */}

  //   {/* ConditionalRendering */}
  //   {/* <Conditional /> */}

  //   {/* Use Effect */}
  //   {/* <Effect /> */}

  //   {/* Exp useEffect */}
  //   {/* <ExpEffect /> */}

  //   {/* <ApiUsers /> */}

  //   {/* <ApiProducts /> */}

  //   {/* <ApiUsers /> */}
  // </StrictMode>,
  <BrowserRouter>
    <AuthProvider>
      {/* tất cả các router dom điều có thể sử dụng auth context vì nằm trong authProvider */}
      <RouterDOM />
    </AuthProvider>
  </BrowserRouter>,
);
