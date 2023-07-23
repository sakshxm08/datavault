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
