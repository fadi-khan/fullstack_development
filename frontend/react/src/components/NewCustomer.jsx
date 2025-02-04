import {useState} from "react";
import {updateCustomer} from "../services/client.jsx";
import {AiOutlineClose} from "react-icons/ai";
import {Link} from "react-router-dom";

export const NewCustomer = ({formBar, setFormBar}) => {

    const [customer, setCustomer] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age: 0
    });
    const [error, setError] = useState(false);
    const [message, setMessage] = useState("")
    const handleChange = (e) => {

        setCustomer({...customer, [e.target.name]: e.target.value});
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError(false);
            await updateCustomer(customer)
            setMessage("Customer Added Successfully !");
        } catch (error) {
            setError(true);
            console.log(error);
            setMessage(`Customer with email ${customer.email} already exists`);
        }
    }

    return (


        <>
            <div>
                {
                    formBar && (
                        <div
                            onClick={()=>{
                                setFormBar(false);
                                location.reload();
                            }}
                            className={"fixed inset-0 z-50 bg-black opacity-50"}>

                        </div>
                    )
                }
            </div>


            <div className={` fixed top-0  p-4  md:w-[60%] w-[80%] border h-full bg-black border-green-700 border-opacity-30 z-50 ease-in-out duration-500 transition-all
                      ${formBar ? "right-0" : "-right-full"} `}>

                <div className={"flex justify-between mb-12"}>
                    <label className={"text-3xl font-bold text-green-800"}>Add Customer</label>

                        <AiOutlineClose
                            className={"hover:border hover:border-green-800 "}
                            size={20}
                            onClick={
                            ()=>{
                                setFormBar(!formBar);
                                location.reload()} }
                        />




                </div>
                <h2 className={`${error ? "text-red-600" : "text-green-600"} text-center my-4`}> {message}</h2>

                <form onSubmit={handleSubmit} className="flex flex-col max-w-[60%] m-auto">


                    <label id={"formLabel"}>First Name</label>
                    <input
                        id={"formInput"}
                        type={"text"}
                        className={"text-black  rounded  focus:outline-green-700  "}
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
                        className={"text-black  rounded  focus:outline-green-700  "}
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
                        className={"text-black  rounded  focus:outline-green-700  "}
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
                        className={"text-black  rounded  focus:outline-green-700  "}
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
                        className={"text-black  rounded  focus:outline-green-700  "}
                        name={"age"}
                        value={customer.age}
                        onChange={handleChange}
                        required={true}
                        placeholder={"Age"}
                    />

                    <button type="submit" className="bg-green-600 text-white px-4 py-3 rounded font-bold text-lg my-4">
                        Save
                    </button>

                </form>


            </div>
        </>


    )
}