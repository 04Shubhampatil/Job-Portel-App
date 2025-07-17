import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./auth/Login.jsx";
import Signup from "./auth/Signup.jsx";
import Home from "./components/Home.jsx";
import Jobs from "./components/Jobs.jsx";
import Browse from "./components/Browse.jsx";
import Profile from "./components/Profile.jsx";
import JobDescription from "./components/JobDescription.jsx";

const approuter = createBrowserRouter([


  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/jobs",
    element: <Jobs />,
  },
  {
    path: "/description/:id",
    element: <JobDescription />,
  },
  
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/browse",
    element: <Browse />,
  },

]);

function App() {
  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
}

export default App;
