import {useState} from "react";
import {updateCustomer} from "../services/client.jsx";
import {AiOutlineClose, AiOutlineDown} from "react-icons/ai";


export const UpdateForm = ({currentCustomer, setCurrentCustomer, updateFormBar, setUpdateFormBar, updateCustomersList}) => {


    // check if error occurred or not
    const [error, setError] = useState(false);

    // to set the message based on response
    const [message, setMessage] = useState("")

    // to handle the change in the text field
    const handleChange = (e) => {

        setCurrentCustomer({...currentCustomer, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError(false);
            await updateCustomer(currentCustomer)
            setMessage("Customer's Information Updated Successfully !");
        } catch (error) {
            setError(true);
            console.log(error);
            setMessage(`Customer with the email already exists`);
        }
    }

    return (


        <>
            <div>
                {
                    updateFormBar && (
                        <div
                            onClick={() => {
                                setUpdateFormBar(false);
                                updateCustomersList();
                            }}
                            className={"fixed inset-0 z-50 bg-black opacity-50"}>

                        </div>
                    )
                }
            </div>


            <div className={` overflow-auto fixed top-0 border-l rounded-l-2xl border-green-950 p-4  md:w-[60%] w-[80%]  h-full bg-black z-50 ease-in-out duration-500 transition-all
                      ${updateFormBar ? "right-0" : "-right-full"} `}>

                <div className={"flex justify-between mb-12"}>
                    <label className={"text-3xl font-bold text-green-800"}>Add Customer</label>

                    <AiOutlineClose
                        className={"hover:border hover:border-green-800 "}
                        size={20}
                        onClick={
                            () => {
                                setUpdateFormBar(false);
                                updateCustomersList();
                            }}
                    />


                </div>
                <h2 className={`${error ? "text-red-600" : "text-green-600"} text-center my-4`}> {message}</h2>

                <form onSubmit={handleSubmit} className=" gap-y-6  flex flex-col max-w-[60%] m-auto">


                    <label id={"formLabel"}>First Name</label>
                    <input
                        id={"formInput"}
                        type={"text"}
                        className={" rounded   "}
                        name={"firstName"}
                        value={currentCustomer.firstName}
                        onChange={handleChange}
                        required={true}
                        placeholder={"First Name"}

                    />


                    <label id={"formLabel"}>Last Name </label>
                    <input
                        id={"formInput"}
                        type={"text"}
                        className={"rounded  "}
                        name={"lastName"}
                        value={currentCustomer.lastName}
                        onChange={handleChange}
                        required={true}
                        placeholder={"Last Name "}
                    />

                    <label id={"formLabel"}>Email Address </label>
                    <input
                        id={"formInput"}
                        type={"email"}
                        className={"rounded   "}
                        name={"email"}
                        value={currentCustomer.email}
                        onChange={handleChange}
                        required={true}
                        placeholder={"Email"}
                    />

                    <label id={"formLabel"}>Phone </label>
                    <input
                        id={"formInput"}
                        type={"text"}
                        className={"rounded   "}
                        name={"phone"}
                        value={currentCustomer.phone}
                        onChange={handleChange}
                        required={true}
                        placeholder={"Phone"}
                    />

                    <label id={"formLabel"}>Age </label>
                    <input
                        id={"formInput"}
                        type={"text"}
                        className={" rounded"}
                        name={"age"}
                        value={currentCustomer.age}
                        onChange={handleChange}
                        required={true}
                        placeholder={"Age"}
                    />
                    <label id={""}>Gender</label>

                    <select

                        className="dropdown-container bg-[#000900] border py-2 h-12 rounded pr-4"
                        name="gender"
                        value={currentCustomer.gender}
                        onChange={handleChange}
                        required={true}
                    >

                        <option value="">Select Gender</option>
                        <option value="MALE">Male</option>
                        <option value="FEMALE">Female</option>
                        <option value="OTHER">Other</option>


                    </select>

                    <button type="submit"
                            className="bg-green-600 text-white px-4 py-3 rounded font-bold text-lg my-4">
                        Save
                    </button>

                </form>

            </div>


        </>


    )
}