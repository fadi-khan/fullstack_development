import { useState } from "react";
import { Avatar } from "./Avatar.jsx";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { DropDownMenu } from "./DropDownMenu.jsx";

const ProfileButton = () => {
    const [dropDown, setDropDown] = useState(false);

    // Close the dropdown when clicking outside
    const handleOverlayClick = () => {
        setDropDown(false);
    };

    // Prevent closing the dropdown when clicking inside the dropdown
    const handleDropdownClick = (e) => {
        e.stopPropagation(); // Prevent the click from reaching the overlay
    };

    return (
        <>
            {/* Overlay (Click to close) */}
            {dropDown && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50  z-40"
                    onClick={handleOverlayClick} // ✅ Clicking outside closes dropdown
                ></div>
            )}

            <div className={"z-50 relative flex-col items-center justify-center  md:w-auto"}>
                <div
                    className={"cursor-pointer flex justify-center items-center gap-3 p-3"}
                    onClick={() => setDropDown(!dropDown)} // Toggle dropdown
                >
                    <Avatar />
                    <ul className={"hidden md:block"}>
                        <li>Justin Bieber</li>
                        <li className={"font-light"}>Admin</li>
                    </ul>
                    <div className={"hidden md:block"}>
                        { !dropDown ? (
                            <AiOutlineDown size={16} color={"green"} />
                        ) : (
                            <AiOutlineUp size={16} color={"green"} />
                        )}
                    </div>
                </div>

                <div
                    className={`absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md transition-all duration-300 transform ${
                        dropDown ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none "
                    } `}
                    onClick={handleDropdownClick} // Prevent closing when clicking inside
                >
                    <DropDownMenu setDropDown={setDropDown} />
                </div>
            </div>
        </>
    );
};

export { ProfileButton };
