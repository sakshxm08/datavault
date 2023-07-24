import "./App.css";
import { Cloud } from "./routes/Cloud";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { Home } from "./routes/Home";
import { Error } from "./routes/Error";
// import SwitchDarkMode from "./components/SwitchDarkMode";
import Menubar from "./components/Menubar";
import { MainPage } from "./pages/MainPage";
import { SharedPage } from "./pages/SharedPage";
import { Footer } from "./components/Footer";

const Layout = () => {
  return (
    <>
      <ScrollRestoration />
      <Outlet />
      <Footer />
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
          path: "/cloud",
          element: <Cloud />,
          children: [
            {
              path: "",
              element: <MainPage />,
            },
            {
              path: "shared",
              element: <SharedPage />,
            },
          ],
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
      <div className="relative font-bodyFont bg-sky-50 dark:bg-gray-800">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
