import "./App.css";
import { Cloud } from "./pages/Cloud";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { Error } from "./pages/Error";
// import SwitchDarkMode from "./components/SwitchDarkMode";
import Menubar from "./components/Menubar";

const Layout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cloud",
          element: <Cloud />,
        },
        {
          path: "/try",
          element: <Menubar />,
        },
      ],
    },
  ]);
  return (
    <>
      <div className="relative font-bodyFont bg-sky-50 dark:bg-gray-900">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
