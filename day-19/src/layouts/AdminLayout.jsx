import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const AdminLayout = () => {
    return (
        <div>
            <Header />
            <main>
                <Sidebar />
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default AdminLayout;