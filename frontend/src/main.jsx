import ReactDOM from "react-dom/client";

import "./index.css";

import AuthProvider from "./providers/AuthProvider";
import { browserRouter } from "./routes";
import { RouterProvider } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={browserRouter} />
  </AuthProvider>,
);
