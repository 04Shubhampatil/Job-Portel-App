import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./components/shared/Navbar.jsx";
import Login from "./auth/Login.jsx";
import Signup from "./auth/Signup.jsx";
import Home from "./components/Home.jsx";

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
]);

function App() {
  return (
    <div>
      <RouterProvider router={approuter} />
    </div>
  );
}

export default App;
