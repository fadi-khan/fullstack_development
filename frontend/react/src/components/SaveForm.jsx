import React, {useState} from "react";
import {saveCustomer} from "../services/client.jsx";
import {AiFillIdcard, AiOutlineClose, AiOutlineDown} from "react-icons/ai";


export const SaveForm = ({updateCustomerList , formBar,setFormBar}) => {
    const [customer, setCustomer] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age: 0
    });



    // check if error occurred or not
    const [error, setError] = useState(false);

    // to set the message based on response
    const [message, setMessage] = useState("")

    // to handle the change in the text field
    const handleChange = (e) => {

        setCustomer({...customer, [e.target.name]: e.target.value});
    }
    <AiFillIdcard/>



    const handleAgeChange = (e) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/[^0-9]/g, ""); // Allow only numbers
        e.target.value = numericValue;
        setCustomer({ ...customer, age: numericValue }); // Update customer.age directly
        console.log(e.target.value.length)
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError(false);
            await saveCustomer(customer)
            setMessage("Customer Added Successfully !");
        } catch (error) {
            setError(true);
            console.log(error);
            setMessage(error.status);
        }
    }




    return (


        <>
            <div>
                {

                    formBar && (
                        <div
                            onClick={() => {
                                setFormBar(false);
                                updateCustomerList();
                            }}
                            className={"fixed inset-0 z-50 bg-black opacity-50 "}>

                        </div>
                    )
                }
            </div>




                <div className={` justify-center items-center border-l  rounded-2xl top-0 fixed ease-in-out duration-500 h-screen   border-green-950 p-4  md:w-[55%] w-[80%]   bg-black  z-50  ${formBar ? "right-0" : "-right-full"} `}>

                    <div className={" flex mx-4 mt-4 justify-between mb-12"}>
                        <label className={" text-3xl font-bold text-green-800"}>Add Customer</label>

                        <AiOutlineClose
                            className={"hover:border hover:border-green-800 "}
                            size={20}
                            onClick={
                                () => {
                                    setFormBar(!formBar);
                                    updateCustomerList()
                                }}
                        />


                    </div>
                    <h2 className={`${error ? "text-red-600" : "text-green-600"} text-center my-4`}> {message}</h2>

                    <form onSubmit={handleSubmit}
                          className="gap-y-6 flex flex-col md:grid md:grid-cols-2 max-w-[60%] m-auto md:items-center">


                        <label id={"formLabel"} >First Name</label>
                        <input
                            id={"formInput"}
                            type={"text"}
                            className={"  rounded   "}
                            name={"firstName"}
                            value={customer.firstName}
                            onChange={handleChange}
                            required={true}
                            placeholder={"First Name"}

                        />


                        <label id={"formLabel"}>Last Name </label>
                        <input
                            id={"formInput"}
                            type={"text"}
                            className={" rounded  "}
                            name={"lastName"}
                            value={customer.lastName}
                            onChange={handleChange}
                            required={true}
                            placeholder={"Last Name "}
                        />

                        <label id={"formLabel"}>Email Address </label>
                        <input
                            id={"formInput"}
                            type={"email"}
                            className={"  rounded   "}
                            name={"email"}
                            value={customer.email}
                            onChange={handleChange}
                            required={true}
                            placeholder={"Email"}
                        />

                        <label id={"formLabel"}>Phone </label>
                        <input
                            id={"formInput"}
                            type={"text"}
                            className={" rounded    "}
                            name={"phone"}
                            value={customer.phone}
                            onChange={handleChange}
                            required={true}
                            placeholder={"Phone"}
                        />

                        <label id={"formLabel"}>Age </label>
                        <input
                            id={"formInput"}
                            type={"text"}
                            className={"  border rounded    "}
                            name={"age"}
                            value={customer.age}
                            onChange={handleChange}
                            required={true}
                            placeholder={"Age"}
                            onInput={handleAgeChange}

                        />
                        <label id={""}>Gender</label>

                            <select

                                className=" bg-[#000900] border py-2 h-12 rounded pr-4"
                                name="gender"
                                value={customer.gender}
                                onChange={handleChange}
                                required
                            >

                                    <option value="" >Select Gender</option>
                                    <option value="MALE">Male</option>
                                    <option value="FEMALE">Female</option>
                                    <option value="OTHER">Other</option>


                            </select>


                        <div>


                        </div>
                        <div className={" md:flex md:w-auto  md:justify-end mt-10 "}>
                            <button type="submit"
                                    className="w-full h-12 bg-green-600 text-white px-4 py-1 rounded font-bold text-lg my-4">
                                Save
                            </button>
                        </div>

                    </form>

                </div>


        </>


    )
}