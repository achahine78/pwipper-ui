import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>root</div>,
  },
  {
    path: "/test",
    element: <div>test</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
