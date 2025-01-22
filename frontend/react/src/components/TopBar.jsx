import {SideBar} from "./SideBar.jsx";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {useState} from "react";

const menuItems = [
    "Home",
    "About",
    "Contact",
    "Profile"
]

const GetMenuItems = ({rest})=>{

    return (
        menuItems.map((item, i) => (
            <li className={`p-4  ${rest}`} key={i}> {item}</li>

        ))
    )
}

const TopBar = () => {


    const [sideBar,setSideBar] = useState(false)
    return (
        <nav className={`max-w-[1240px] h-24 px-4 text-white m-auto flex items-center justify-between`}>

            <Title/>
            <ul className="md:flex hidden">
                <GetMenuItems/>
            </ul>
            <div className={'flex '} onClick={()=>{setSideBar(!sideBar)}} >
                {
                    !sideBar?<AiOutlineMenu className="size-[24px]" />:<AiOutlineClose/>
                }
            </div>
           <SideBar sideBar={sideBar}/>


        </nav>
    )
}
const Title = ()=>{
    return(
        <h1 className="w-1/2 font-bold text-4xl text-[#00df9a] ">
            REACT
        </h1>
    )
}
export { TopBar, Title, GetMenuItems };