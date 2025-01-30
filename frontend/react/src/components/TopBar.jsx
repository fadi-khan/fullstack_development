import {AiOutlineMenu} from "react-icons/ai";
import {ProfileButton} from "./ProfileButton.jsx";
import {Logo} from "./Logo.jsx";


// const TopBar = () => {
//     const [sideBar, setSideBar] = useState(false);
//
//     return (
//         <div className="h-screen flex flex-col dark:text-white">
//             {/* Navigation Bar */}
//             <nav className="border-b flex w-full justify-between px-8 items-center h-[100px]">
//                 {/* Menu Button (Only visible on mobile) */}
//                 <button onClick={() => setSideBar(true)} className="md:hidden text-2xl">
//                     <AiOutlineMenu />
//                 </button>
//
//                 {/* Profile Image */}
//                 <div className="md:flex hidden">
//                     <img
//                         className="md:w-[50px] w-[40px] md:h-[50px] h-[40px] drop-shadow shadow-xl ring-2 rounded-full p-2 shadow-green-600 bg-[#000300]"
//                         src={'logo2.png'}
//                         alt="Bordered avatar"
//                     />
//                 </div>
//                 <ProfileButton />
//             </nav>
//
//             {/* Main Content */}
//             <div className="flex flex-1">
//                 {/* Sidebar */}
//                 <SideBar toggleSidebar={sideBar} setToggleSidebar={setSideBar} />
//
//                 {/* Main Section */}
//                 <main className="flex-1 bg-gray-100 p-6 overflow-y-auto">
//                     <h1 className="text-red-600">Hello My Name Is Fahad</h1>
//                 </main>
//             </div>
//         </div>
//     );
// };


const TopBar = ({setToggleSidebar}) => {
    return (<nav className="border-b border-green-700 border-opacity-50 flex w-full justify-between pr-4 pl-2 items-center h-[100px]">
        {/* Mobile Menu Button */}
        <button onClick={() => setToggleSidebar(true)} className="md:hidden text-2xl hover:border p-1  border-green-700 rounded">
            <AiOutlineMenu color={"lightgray"} />
        </button>
        <div className={"md:flex hidden"}><Logo/></div>
        <div className={"md:hidden "}><Logo/></div>


        <ProfileButton/>

    </nav>);
};


export {TopBar};


