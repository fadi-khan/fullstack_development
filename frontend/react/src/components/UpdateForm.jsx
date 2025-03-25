import React, {useState} from "react";
import {updateCustomer} from "../services/client.jsx";
import {AiOutlineClose, AiOutlineDown} from "react-icons/ai";
import PhoneInputWithCountrySelect from "react-phone-number-input";
import {FormInput} from "../CustomComponents/FormInput.jsx";
import {CountrySelector} from "./CountrySelector.jsx";


export const UpdateForm = ({currentCustomer, setCurrentCustomer, updateFormBar, setUpdateFormBar, updateCustomersList}) => {



    // check if error occurred or not
    const [error, setError] = useState(false);

    // to set the message based on response
    const [confirmationMessage, setConfirmationMessage] = useState("")
    const [fieldsErrorMsg, setFieldsErrorMsg] = useState({})

    // to handle the change in the text field
    const handleChange = (e) => {

        setCurrentCustomer({...currentCustomer, [e.target.name]: e.target.value});
    }
    const handlePhoneCodeChange = (code) => {
        setCurrentCustomer({ ...currentCustomer, phoneCode: code });
    };


    const handlePhoneNumberChange = (e) => {
        const phoneNumberValue = e.target.value;
        const number = phoneNumberValue.replace(/[^0-9]/g,"" );
        e.target.value = number;
        setCurrentCustomer({ ...currentCustomer, phone: number });

    }


    const handleAgeChange = (e) => {
        const inputValue = e.target.value;
        const numericValue = inputValue.replace(/[^0-9]/g, ""); // Allow only numbers
        e.target.value = numericValue;
        setCurrentCustomer({ ...currentCustomer, age: numericValue }); // Update customer.age directly
        console.log(numericValue);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setError(false);
            await updateCustomer(currentCustomer)
            setConfirmationMessage("Customer's Information Updated Successfully !");
        } catch (error) {
            console.log(error);
            setError(true);
            setFieldsErrorMsg(error);
            const errorMessage = error.response?.data?.message || "Something went wrong!";
            setConfirmationMessage(errorMessage);
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


            <div className={` overflow-auto fixed top-0 border-l  border-gray-600 border-opacity-30 p-4 md:w-[60%] lg:w-[50%] xl:w-[40%] w-[80%]  h-full bg-[#000900] z-50 ease-in-out duration-500 transition-all
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
                <h2 className={`${error ? "text-red-600" : "text-green-600"} text-center my-4`}> {confirmationMessage}</h2>


                <form onSubmit={handleSubmit} className="
                     p-4 pt-0 grid  gap-x-6 gap-y-2 grid-cols-1  md:grid-cols-2     ">


                    <FormInput
                        inputLabel={"First Name"}
                        type={"text"}
                        name={"firstName"}
                        value={currentCustomer.firstName}
                        onChange={handleChange}
                        placeholder={"First Name"}
                        errorMsg={fieldsErrorMsg.firstName}

                    />

                    <FormInput
                        inputLabel={"Last Name"}
                        type={"text"}
                        name={"lastName"}
                        value={currentCustomer.lastName}
                        onChange={handleChange}
                        placeholder={"First Name"}
                        errorMsg={fieldsErrorMsg.lastName}

                    />

                    <FormInput
                        inputLabel={"Email"}
                        type={"email"}
                        name={"email"}
                        value={currentCustomer.email}
                        onChange={handleChange}
                        placeholder={"Email"}
                        errorMsg={fieldsErrorMsg.firstName}


                    />

                    <div className={"flex flex-col  gap-y-1  "}>
                        <label id={"formLabel"}>Phone </label>

                        <div className={"flex w-full items-center"}>
                            <CountrySelector value={currentCustomer.phoneCode} onChange={handlePhoneCodeChange}/>
                            <input
                                id={"formInput"}
                                type={"text"}
                                className={" rounded-xl border border-white border-opacity-30  "}
                                name={"phone"}
                                value={currentCustomer.phone}
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
                        value={currentCustomer.age}
                        onChange={handleAgeChange}
                        placeholder={"Age"}
                        errorMsg={fieldsErrorMsg.age}


                    />


                    <div className={"flex flex-col gap-y-1"}>
                        <label id={"formLabel"}>Gender</label>

                        <select

                            className=" bg-[#000900] border border-white border-opacity-30  py-2 h-12 rounded-xl pl-2 pr-4"
                            name="gender"
                            value={currentCustomer.gender}
                            onChange={handleChange}
                            required
                        >

                            <option value="">Select Gender</option>
                            <option value="MALE">Male</option>
                            <option value="FEMALE">Female</option>
                            <option value="OTHER">Other</option>


                        </select>
                    </div>


                    <button type="submit "
                            className=" md:col-span-2 mx-16 mt-24 w-auto h-12 bg-green-600 text-white px-4 py-1 rounded-xl font-bold text-lg my-4">
                        Save
                    </button>


                </form>


            </div>


        </>


    )
}