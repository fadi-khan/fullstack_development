import { useState } from "react";
import {TopBar} from "./TopBar";
import {SideBar} from "./SideBar";
import {Body} from "./Body.jsx";


const Layout = () => {
    const [sideBar, setSideBar] = useState(false);

    return (
        <div className="h-screen flex flex-col dark:text-white">
            {/* TopBar */}
            <TopBar toggleSidebar={sideBar} setToggleSidebar={setSideBar} />

            {/* Sidebar + MainContent Layout */}
            <div className="flex flex-1">
                <SideBar toggleSidebar={sideBar} setToggleSidebar={setSideBar} />
                <Body/>
            </div>
        </div>
    );
};

export default Layout;
