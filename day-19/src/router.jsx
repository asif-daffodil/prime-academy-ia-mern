import { createBrowserRouter } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminLayout />,
        children: [
            {
                path: "/admin",
                element: "Dashboard"
            },
            {
                path: "/admin/products",
                element: "products"
            }
        ]
    }
]);

export default router