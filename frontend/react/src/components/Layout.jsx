import { useState } from "react";
import {TopBar} from "./TopBar";
import {SideBar} from "./SideBar";
import {Body} from "./Body.jsx";

const Layout = () => {
    const [sideBar, setSideBar] = useState(false);
    const [formBar, setFormBar] = useState(false);  // ✅ Define formBar here

    return (
        <div className={`${formBar ? "overflow-clip" : "overflow-auto"} h-screen flex flex-col dark:text-white text-black dark:bg-[#000900] bg-white`}>
            {/* TopBar */}
            <TopBar formBar={formBar} setToggleSidebar={setSideBar} />

            {/* Sidebar + MainContent Layout */}
            <div className="flex flex-1">
                <SideBar  toggleSidebar={sideBar} setToggleSidebar={setSideBar} />
                <Body formBar={formBar} setFormBar={setFormBar} /> {/* ✅ Pass formBar to Body */}
            </div>
        </div>
    );
};

export default Layout;


