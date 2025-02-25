import { useState, useEffect } from "react";

const Options = ({customer,setCurrentCustomer ,setUpdateFormBar}) => {
    const [isOpen, setIsOpen] = useState(false);

    // Toggle menu visibility
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".dropdown-container")) {
                setIsOpen(false);
            }
        };

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="z-50 relative dropdown-container">
            {/* Three Dots Button */}
            <button
                onClick={toggleMenu}
                className=" ring-1  w-5 font-bold rounded-md h-7   shadow-sm  bg-[#000900] bg-opacity-35"

            >
                ⋮
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div className="absolute right-0 mt-2 w-32  border bg-[#000900] shadow-lg rounded-lg">
                    <button
                        className="block w-full text-left px-4 py-2 hover:bg-green-600 "
                        onClick={() =>
                            {
                                setCurrentCustomer(customer)
                                setUpdateFormBar(true)
                            }
                    }
                    >
                        ✏️ Edit
                    </button>
                    <button
                        className="block w-full text-left px-4 py-2 hover:bg-green-600 text-red-600"
                        onClick={() => alert("Delete clicked")}
                    >
                        🗑️ Delete
                    </button>
                </div>
            )}
        </div>
    );
};

export default Options;
