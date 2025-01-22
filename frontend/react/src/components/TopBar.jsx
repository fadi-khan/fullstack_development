import {SideBar} from "./SideBar.jsx";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {useState} from "react";

const MenuItems = [
    "Home",
    "Contact",
    "Settings"
]


const GetMenuItems = ({rest})=>{

    return (
        MenuItems.map((item, i) => (
            <li className={`p-4  ${rest}`} key={i}> {item}</li>

        ))
    )
}

const TopBar = () => {


    const [sideBar,setSideBar] = useState(false)
    return (
        <nav className={"max-w-[1240px] border-b border-t border-gray-900  md:max-w-full h-24 px-4 text-white m-auto flex items-center sm:justify-between md:justify-end"}>

            <div className={" md:hidden justify-center items-center w-full text-center"}><Title/></div>
            <ul className="md:flex hidden">
                <GetMenuItems/>
            </ul>
            <div className={'flex md:hidden '} onClick={()=>{setSideBar(!sideBar)}} >
                {
                    !sideBar?<AiOutlineMenu className="size-[24px]" />:<AiOutlineClose className="size-[24px]"/>
                }
            </div>
           <SideBar sideBar={sideBar}/>


        </nav>
    )
}
const Title = ()=>{
    return(
        <h1 className=" font-bold text-2xl md:text-3xl text-[#00df9a]">
            FAHAD'SCODE
        </h1>
    )
}
export { TopBar, Title, GetMenuItems };

export const Logo =()=>{
    return (

        <img className="w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
             src={"https://scontent.fisb32-1.fna.fbcdn.net/v/t39.30808-1/351139605_215592867945817_7089080828550846155_n.jpg?stp=dst-jpg_s240x240_tt6&_nc_cat=111&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeET2xJ-2xCHE8S0Na4fD531Bh3TuAex96cGHdO4B7H3pzWsh869EIFwc8CxNX5Q3HdODCdln4oNk1L5iF8Z9oj-&_nc_ohc=A6oj39cKbRoQ7kNvgGWtvwV&_nc_zt=24&_nc_ht=scontent.fisb32-1.fna&_nc_gid=AtzblxOmZscJZuV9UoZ6iDa&oh=00_AYBmsoIMKwhDtDvKOK2Z7z6kEiTNSzRUyqBykb60Hp5Lqw&oe=6796E695"} alt="Bordered avatar"/>

    )
}