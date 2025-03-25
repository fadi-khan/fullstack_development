import React, {useState} from "react";
import {saveCustomer} from "../services/client.jsx";
import PhoneInput from "react-phone-number-input/input";
import {CountrySelector} from "./CountrySelector.jsx";
import {FormInput} from "../CustomComponents/FormInput.jsx";
import {useNavigate} from "react-router-dom";
import {
    AiFillCaretDown,
    AiOutlineArrowLeft, AiOutlineArrowsAlt,
    AiOutlineBackward, AiOutlineCaretLeft,
    AiOutlineLeft,
    AiOutlineStepBackward
} from "react-icons/ai";
import {BiArrowBack, BiLeftArrow} from "react-icons/bi";
import {GiBranchArrow} from "react-icons/gi";






export const SaveForm = () => {
    const [customer, setCustomer] = useState({phoneCode: 'PK'});




    // check if error occurred or not
    const [error, setError] = useState(false);

    // to set the message based on response
    const [confirmationMessage, setConfirmationMessage] = useState("")
    const [fieldsErrorMsg, setFieldsErrorMsg] = useState({})

    // to handle the change in the text field
    const handleChange = (e) => {

        setCustomer({...customer, [e.target.name]: e.target.value});
        setFieldsErrorMsg({})
        setConfirmationMessage("")
    }
    const handlePhoneCodeChange = (code) => {


        setCustomer({ ...customer, phoneCode: code });
    };

    const handlePhoneNumberChange = (e) => {
        const phoneNumberValue = e.target.value;
        const number = phoneNumberValue.replace(/[^0-9]/g,"" );
        e.target.value = number;
        setCustomer({ ...customer, phone: number });


    }


    const handleAgeChange = (e ) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/[^0-9]/g, ""); // Allow only numbers
        e.target.value = numericValue;
        setCustomer({ ...customer, age: numericValue }); // Update customer.age directly

    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError(false);
            await saveCustomer(customer)
            setConfirmationMessage("Customer Added Successfully !");
            console.log(customer.phoneCode)
            setFieldsErrorMsg({})



        } catch (error) {
            setError(true);
            setFieldsErrorMsg(error);

             setConfirmationMessage(error.message);




        }
    }




    return (


            <div
                className={` w-full bg-[#000900]  mt-4   `}>

                <div className={"p-4   m-4  border rounded-lg bg-gray-950  border-gray-600 border-opacity-30 shadow-sm shadow-gray-900 xl:w-1/2 "}>
                    <div className={"px-4 flex  justify-between  "}>
                        <label className={"font-mono text-2xl font-bold text-green-500"}>Add New Customer</label>
                        {/*<label onClick={()=>{navigate("/")}}>Go to Home</label>*/}
                        <a href={"/"}
                           className={" font-mono border border-opacity-0 border-white hover:border-opacity-50   text-green-500 flex gap-x-1 text-center items-center underline underline-offset-2 hover:border p-1 font-bold  "}>

                          <BiArrowBack /> Home
                        </a>
                    </div>

                    <div className={` flex text-center text-sm pl-4 ${error ? "text-red-600" : "text-green-500"}  select-text   bg-opacity-25 h-6  text-center mt-6`}>
                        {confirmationMessage}
                    </div>

                    <form onSubmit={handleSubmit} className="
                     p-4 pt-0 grid  gap-x-6 gap-y-2 grid-cols-1  md:grid-cols-2     ">


                       <FormInput
                           inputLabel={"First Name"}
                           type={"text"}
                           name={"firstName"}
                           value={customer.firstName}
                           onChange={handleChange}
                           placeholder={"First Name"}
                           errorMsg={fieldsErrorMsg.firstName}

                       />

                        <FormInput
                            id={"formInput"}
                            inputLabel={"Last Name"}
                            type={"text"}
                            name={"lastName"}
                            value={customer.lastName}
                            onChange={handleChange}
                            placeholder={"Last Name"}
                            errorMsg={fieldsErrorMsg.lastName}

                        />

                        <FormInput
                            inputLabel={"Email"}
                            type={"email"}
                            name={"email"}
                            value={customer.email}
                            onChange={handleChange}
                            placeholder={"Email"}
                            errorMsg={fieldsErrorMsg.firstName}



                        />

                        <div className={"flex flex-col  gap-y-1  "}>
                        <label id={"formLabel"}>Phone </label>

                            <div className={"flex w-full items-center"}>
                                <CountrySelector value={customer.phoneCode} onChange={handlePhoneCodeChange}/>
                                <input
                                    id={"formInput"}
                                    type={"text"}
                                    className={`border-opacity-30 border-white rounded-xl  border `}
                                    name={"phone"}
                                    value={customer.phone}
                                    onChange={handlePhoneNumberChange}
                                    placeholder={"Phone"}
                                />
                            </div>


                            <label className={"text-red-600 text-sm h-6 "}>{fieldsErrorMsg.validPhoneNumber} </label>
                        </div>

                        <FormInput
                            inputLabel={"Age"}
                            type={"text"}
                            name={"age"}
                            value={customer.age}
                            onChange={handleAgeChange}
                            placeholder={"Age"}
                            errorMsg={fieldsErrorMsg.age}

                        />


                        <div className={"flex flex-col gap-y-1"}>
                            <label id={"formLabel"}>Gender</label>

                            <select

                                className=" bg-[#000900] border py-2 h-12 rounded-xl pl-2 pr-4 border-white border-opacity-30"
                                name="gender"
                                value={customer.gender}
                                onChange={handleChange}
                                required
                            >

                                <option value="">Select Gender</option>
                                <option value="MALE">Male</option>
                                <option value="FEMALE">Female</option>
                                <option value="OTHER">Other</option>


                            </select>
                            <label className={"text-red-600 text-sm h-6 "}>{fieldsErrorMsg.gender} </label>
                        </div>


                        <button type="submit"
                                className="md:col-span-2
                                     mx-28 md:mx-36 h-12 bg-green-500 text-gray-950 text-xl px-4 py-1 rounded-xl font-bold my-12">
                                Save
                            </button>


                    </form>
                </div>

            </div>


    )
}
