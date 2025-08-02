import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import HowToUse from "./pages/HowToUse";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/features",
    element: <Features />,
  },
  {
    path: "/how-to-use",
    element: <HowToUse />,
  },
]);
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
