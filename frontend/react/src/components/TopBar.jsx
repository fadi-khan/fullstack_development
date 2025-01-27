import {SideBar} from "./SideBar.jsx";
import {AiOutlineClose, AiOutlineDown, AiOutlineMenu, AiOutlineUp} from "react-icons/ai";
import {useState} from "react";
import {DropDownMenu} from "./DropDownMenu.jsx";


const TopBar = () => {


    const [sideBar,setSideBar] = useState(false)
    const [showDropDown,setShowDropDown] = useState(false)

    const toggleSideBar = () => {
        setSideBar(!sideBar);
    };

    const toggleDropdown = () => {
        setShowDropDown(!showDropDown);
    };

    return (

        <nav onClick={() => showDropDown ? setShowDropDown(false) : ""}
             className={"max-w-[1240px] border-b border-t border-gray-900  md:max-w-full h-24 px-4 dark:text-white m-auto flex items-center justify-between  md:justify-end "}>


            <div className={` md:hidden justify-center items-center `}>
                <Title/>
            </div>

            <div className={"flex gap-2 m-4 justify-center items-center "}>


                <div className={`relative mr-4`}>
                    <div className={"flex gap-2 justify-center items-center"} onClick={toggleDropdown}>
                        <Logo/>
                        <ul className={'hidden md:block'}>
                            <li>Justin Bieber</li>
                            <li className={"font-light"}>Admin</li>
                        </ul>
                        <div className={'hidden md:block'}>
                            {
                                showDropDown ? <AiOutlineUp size={12}/> : <AiOutlineDown size={12}/>
                            }
                        </div>

                    </div>

                    {
                        showDropDown ? <div className={"mr-24"}><DropDownMenu/></div> : ""
                    }
                </div>

                <div className={'flex md:hidden '} onClick={toggleSideBar}>
                    {
                        !sideBar ? <AiOutlineMenu className="size-[24px]"/> :
                            <AiOutlineClose className="size-[24px]"/>
                    }
                </div>
            </div>


            <SideBar sideBar={sideBar}/>

        </nav>


    )
}
const Title = () => {
    return (
        <h1 className=" font-bold text-2xl md:text-3xl text-[#00df9a]">
            FAHAD'SCODE

        </h1>
    )
}


export {TopBar, Title};


export const Logo = ({rest}) => {
    return (

        <img className={`${rest} w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-green-800`}
             src={"https://avatars.githubusercontent.com/u/110169794?v=4"}
             alt="Bordered avatar"/>

    )
}