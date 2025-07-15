import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/Navbar.jsx";
import Login from "./auth/Login.jsx";
import Signup from "./auth/Signup.jsx";
import Home from "./components/Home.jsx";
import Jobs from "./components/Jobs.jsx";

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
