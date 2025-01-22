import {GetMenuItems, Title} from "./TopBar.jsx";

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
const SideBar = ({ sideBar, ...rest }) => {
    return (
        <div
            className={`ease-in-out duration-500 p-4 text-white fixed top-0 w-[60%] border-r h-full bg-[#000900] border-gray-900 ${
                sideBar ? "left-0" : "-left-full"
            }`}
        >
            <Title />
            <ul className="pt-24 uppercase">
                <GetMenuItems rest="border-b border-gray-600 border-opacity-50" />
            </ul>
        </div>
    );
};
export {SideBar};