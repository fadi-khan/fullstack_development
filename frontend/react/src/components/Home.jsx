

import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {getCustomers} from "../services/client.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import {ConfirmationMessage} from "./ConfirmationMessage.jsx";
import {CustomerCard} from "./CustomerCard.jsx";
import {UpdateForm} from "./UpdateForm.jsx";

export const Home = ({ formBar, setFormBar }) => {
    // return (
    //     <div className="flex-1 p-6">
    //         {/*<Table formBar={formBar} setFormBar={setFormBar} /> /!* ✅ Pass it here *!/*/}
    //     </div>
    // );
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const  navigate = useNavigate()
    const [updateForm, setUpdateForm] = useState(false);
    const [currentCustomer, setCurrentCustomer] = useState({});

    const[showDeleteDialogue, setShowDeleteDialogue] = useState(false);

    const customerData = () => {
        setLoading(true);
        getCustomers()
            .then(res => {
                if (res.data && res.data.length > 0) {
                    setCustomers(res.data);
                }
                else (
                    setCustomers([])
                )
            })
            .catch(err => {
                console.error("Error getting customers data", err);
                setError(true);
            })
            .finally(() => setLoading(false));
    };

    useEffect(() => {
        customerData();
    }, []);

    if (loading) {
        return <LoadingSpinner />;
    }

    return (
        <div className="bg-gray-950 overflow-auto flex-1 p-4 ">
            {/* ✅ Button to open the SaveForm */}
            <button
                className=" drop-shadow-xl shadow-gray-400 font-bold py-2.5 bg-green-700 px-5 rounded mb-12 hover:opacity-80"
                // ✅ Update formBar state when clicked
                onClick={()=>{navigate("/addCustomer");}}>

                Add new customer
            </button>
            <ConfirmationMessage
                id={currentCustomer.customerId}
                updateCustomerList={customerData}
                showDeleteDialogue={showDeleteDialogue}
                setShowDeleteDialogue={setShowDeleteDialogue}
            />


            <CustomerCard
                customers={customers}
                setCurrentCustomer={setCurrentCustomer}
                setUpdateFormBar={setUpdateForm}
                setShowDeleteDialogue={setShowDeleteDialogue}
            />




            <UpdateForm
                updateFormBar={updateForm}
                setUpdateFormBar={setUpdateForm}
                currentCustomer={currentCustomer}
                setCurrentCustomer={setCurrentCustomer}
                updateCustomersList={customerData}
            />


        </div>
    );
};

