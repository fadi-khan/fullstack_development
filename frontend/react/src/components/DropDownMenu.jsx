
const DropDownMenu = ({setDropDown})=>{
    return (
        <nav className={" text-center border border-green-700  rounded  bg-[#000300]    "}>
            <ul className={"font-light "} onClick={()=>setDropDown(false)}>
                <li className={"p-2  border border-green-700 h-12 hover:bg-green-700  "}>Profile</li>
                <li className={"p-2 border border-green-700 h-12 hover:bg-green-700 "}>Logout</li>
            </ul>
        </nav>
    )
}

export { DropDownMenu };