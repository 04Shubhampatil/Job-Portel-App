import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./auth/Login.jsx";
import Signup from "./auth/Signup.jsx";
import Home from "./components/Home.jsx";
import Jobs from "./components/Jobs.jsx";
import Browse from "./components/Browse.jsx";
import Profile from "./components/Profile.jsx";
import JobDescription from "./components/JobDescription.jsx";
import Companies from "./components/admin/Companies.jsx";
import CompanyCreate from "./components/admin/CompanyCreate.jsx";
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
  //admin routes
  {
    path: "/admin/companies",
    element: <Companies />,
  },
  {
    path: "/admin/companies/create",
    element: <CompanyCreate />,

  }


]);

function App() {
  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
}

export default App;
