import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import Features from "./pages/Features";
import HowToUse from "./pages/HowToUse";
import WhatsNew from "./pages/WhatsNew";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import ApplicationUI from "./pages/ApplicationUI";
import Customization from "./pages/Customization";
import MeetAHuman from "./pages/MeetAHuman";
import Careers from "./pages/Careers";
import Proctoring from "./pages/Proctoring";
import Algorithm from "./pages/Algorithm";
import CandidateReport from "./pages/CandidateReport";
import OurConcept from "./pages/OurConcept";

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
  {
    path: "/whats-new",
    element: <WhatsNew />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/application-ui",
    element: <ApplicationUI />,
  },
  {
    path: "/customization",
    element: <Customization />,
  },
  {
    path: "/meet-a-human",
    element: <MeetAHuman />,
  },
  {
    path: "/careers",
    element: <Careers />,
  },
  {
    path: "/proctoring",
    element: <Proctoring />,
  },
  {
    path: "/algorithm",
    element: <Algorithm />,
  },
  {
    path: "/candidate-report",
    element: <CandidateReport />,
  },
  {
    path: "/our-concept",
    element: <OurConcept />,
  }
]);
function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
