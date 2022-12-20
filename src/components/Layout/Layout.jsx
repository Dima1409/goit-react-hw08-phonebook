import AppBar from "components/AppBar";
import { Outlet } from "react-router-dom";
import { Suspense } from "react";
// import Loader from "components/Loader";

const Layout = () => {
    return (
        <div>
            <AppBar/>
            <Suspense fallback={null}>
                <Outlet/>
            </Suspense>
        </div>
    );
};

export default Layout;