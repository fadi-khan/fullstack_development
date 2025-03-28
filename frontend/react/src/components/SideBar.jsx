import {AiOutlineClose} from "react-icons/ai";
import {useNavigate} from "react-router-dom";


const SideBar = ({ toggleSidebar, setToggleSidebar }) => {
    const MenuItems = ["Home", "Contact", "Settings"];
    const navigate = useNavigate();

    return (

        <>
            {/* Overlay (Click to close) */}
            {toggleSidebar && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-40"
                    onClick={() => setToggleSidebar(false)} // ✅ Clicking outside closes sidebar
                ></div>
            )}
            <div
                className={`fixed md:relative md:left-0 top-0 ease-in-out duration-500 pl-2 text-white md:w-[25%] w-[80%] border-r h-full bg-black border-green-700 border-opacity-30  z-50
            ${toggleSidebar ? "left-0" : "-left-full"} md:block`}>

                {/* Close Button (only on mobile) */}
                <div className="m-4 flex justify-between items-center  md:hidden">
                    <h2 className="text-green-700 font-mono text-3xl font-bold ">Menu</h2>
                    <button onClick={() => setToggleSidebar(false)} className="text-white text-xl">
                        <AiOutlineClose/>
                    </button>
                </div>

                {/* Menu Items */}
                <ul  onClick={() => setToggleSidebar(false)}>
                    {MenuItems.map((item, i) => (
                        <div key={i}
                             className={` p-2 flex items-center space-x-2`}>
                            <li className={`p-2 shadow-lg  bg-gray-950 shadow-gray-900 ring-1 ring-gray-900   w-full       justify-center hover:bg-green-700 hover:rounded `} onClick={()=>{i===0 ? navigate("/"):navigate("/about") }} >{item}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </>

    );
};


export {SideBar};
