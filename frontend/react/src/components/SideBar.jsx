import {Logo, Title} from "./TopBar.jsx";
import {AiOutlineContacts, AiOutlineHome, AiOutlineSetting} from "react-icons/ai";

// const SideBar=({sideBar , ...rest})=>{
//
//    if(sideBar){
//    return (
//
//
//
//             <div className="ease-in-out duration-500 p-4 text-white fixed left-0 top-0 w-[60%] border-r h-full bg-[#000900] border-gray-900">
//                 <Title/>
//                 <ul className="pt-24  uppercase">
//                     <GetMenuItems
//                         rest ='border-b border-gray-600 border-opacity-50'/>
//                 </ul>
//
//             </div>
//
//
//    )
//    }
//
// }
const SideBar = ({sideBar, ...rest}) => {

    const MenuItems = [
        "Home",
        "Contact",
        "Settings"
    ]
    return (
        <div
            className={`md:left-0 ease-in-out duration-500 p-4 text-white fixed top-0 w-[60%] md:w-[30%] border-r h-full bg-[#000900] border-gray-900 ${
                sideBar ? "left-0" : "-left-full"
            }`}
        >
            <div className={"flex gap-2 pl-8 pt-4"}><Logo/><Title/></div>
            <ul className="pt-12 pl-8">

                {
                    MenuItems.map((item, i) => (
                        <div className={`hover:bg-[#00df9a] hover:rounded flex gap-4 p-4 border-b border-gray-900  `}>
                            <div className={"flex size-[20px] pt-1 "}>{sideBarIcons[i]}</div>
                            <li key={i}> {item}</li>
                        </div>
                    ))
                }
            </ul>

        </div>
    );
};
export {SideBar};

const sideBarIcons = [

    <AiOutlineHome/>,
    <AiOutlineContacts/>,
    <AiOutlineSetting/>,
]