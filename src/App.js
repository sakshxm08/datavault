import "./App.css";
import { Cloud } from "./pages/Cloud";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration,
} from "react-router-dom";
import { Home } from "./pages/Home";

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

      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cloud",
          element: <Cloud />,
        },
      ],
    },
  ]);
  return (
    <>
      <div className="relative font-bodyFont">
        <RouterProvider router={router} />
      </div>
    </>
  );
}

export default App;
