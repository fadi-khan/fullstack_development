
const DropDownMenu = ()=>{
    return (
        <div className={"absolute w-full text-center border border-[#00df9a] rounded mt-4 bg-[#000300] "}>
            <ul className={" font-light "}>
                <li className={"block  border-b border-[#00df9a] p-2 hover:bg-[#00df9a] "}>Profile</li>
                <li className={"block p-2 hover:bg-[#00df9a] "}>Logout</li>
            </ul>
        </div>
    )
}

export { DropDownMenu };