import {AiOutlineClose} from "react-icons/ai";


const SideBar = ({ toggleSidebar, setToggleSidebar }) => {
    const MenuItems = ["Home", "Contact", "Settings"];

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
                className={` fixed md:relative md:left-0 top-0 ease-in-out duration-500 p-4 text-white md:w-[25%] w-[80%] border-r h-full bg-black border-green-700 border-opacity-30  z-50
            ${toggleSidebar ? "left-0" : "-left-full"} md:block`}>

                {/* Close Button (only on mobile) */}
                <div className="mx-4 flex justify-between items-center mb-4 md:hidden">
                    <h2 className="text-green-700 font-mono text-3xl font-bold ">Menu</h2>
                    <button onClick={() => setToggleSidebar(false)} className="text-white text-2xl">
                        <AiOutlineClose/>
                    </button>
                </div>

                {/* Menu Items */}
                <ul className="pt-4 pl-8 space-y-4" onClick={() => setToggleSidebar(false)}>
                    {MenuItems.map((item, i) => (
                        <div key={i}
                             className={`md:border-b  border-green-700 border-opacity-30  justify-center hover:bg-green-700 hover:rounded p-2 flex items-center space-x-2`}>
                            <li className={`text-lg w-full `}>{item}</li>
                        </div>
                    ))}
                </ul>
            </div>
        </>

    );
};


export {SideBar};
