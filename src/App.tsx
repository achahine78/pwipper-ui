import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Homepage } from "./pages/Homepage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>root</div>,
  },
  {
    path: "/home",
    element: <Homepage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
