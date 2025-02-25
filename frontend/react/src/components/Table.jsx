import React, { useEffect, useState } from "react";
import { getCustomers} from "../services/client.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import {UpdateForm} from "./UpdateForm.jsx";
import {SaveForm} from "./SaveForm.jsx";
import {CustomerCard} from "./CustomerCard.jsx";



export const Table = ({ formBar, setFormBar }) => {
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const [updateForm, setUpdateForm] = useState(false);
    const [currentCustomer, setCurrentCustomer] = useState({

    });

    const customerData = () => {
        setLoading(true);
        getCustomers()
            .then(res => {
                if (res.data && res.data.length > 0) {
                    setCustomers(res.data);
                }
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
        <div className="overflow-auto rounded">
            {/* ✅ Button to open the SaveForm */}
            <button
                className="font-bold py-2.5 bg-green-700 px-5 rounded mb-12 hover:opacity-80"
                onClick={() => setFormBar(true)} // ✅ Update formBar state when clicked
            >
                Add new customer
            </button>



            <CustomerCard
                customers={customers}
                setCurrentCustomer={setCurrentCustomer}
                setUpdateFormBar={setUpdateForm}
            />

            <UpdateForm
                updateFormBar={updateForm}
                setUpdateFormBar={setUpdateForm}
                currentCustomer={currentCustomer}
                setCurrentCustomer={setCurrentCustomer}
                updateCustomersList={customerData}
            />

            {/* ✅ SaveForm now correctly receives formBar */}
            <SaveForm updateCustomerList={customerData} formBar={formBar} setFormBar={setFormBar}/>
        </div>
    );
};

//when displaying customer data  as table

// const customersList = () => {
//     setLoading(true);
//     getCustomers()
//         .then((response) => {
//             if (response.data && response.data.length > 0) {
//                 setCustomers(response.data);
//                 setColumn(Object.keys(response.data[0]));
//             } else {
//                 setCustomers([]);
//                 setColumn([]);
//             }
//         })
//         .catch((error) => {
//             console.error("Error fetching customers:", error);
//             setError(true);
//         })
//         .finally(() => setLoading(false));
// };

{/*<table className="min-w-full border-collapse shadow-md">*/}
{/*    <thead className="bg-gray-800 uppercase text-sm">*/}
{/*    <tr className="border-b border-collapse border-gray-600 select-text">*/}
{/*        {columns.map((column, i) =>*/}
{/*            i > 0 ? (*/}
{/*                <th key={i} className="py-3 px-6 text-left">*/}
{/*                    {column}*/}
{/*                </th>*/}
{/*            ) : null*/}
{/*        )}*/}
{/*        <th className="py-3 px-6 text-left capitalize underline cursor-pointer text-green-800"></th>*/}
{/*        <th className="py-3 px-6 text-left capitalize underline cursor-pointer text-green-800"></th>*/}
{/*    </tr>*/}
{/*    </thead>*/}
{/*    <tbody>*/}
{/*    {customers.map((customer, i) => (*/}
{/*        <tr*/}
{/*            key={i}*/}
{/*            className="border-collapse border-b border-gray-600 border-opacity-30 hover:bg-green-800"*/}
{/*        >*/}
{/*            {columns.map((column, j) =>*/}
{/*                j > 0 ? (*/}
{/*                    <td key={j} className="py-4 px-6 text-left">*/}
{/*                        {customer[column]}*/}
{/*                    </td>*/}
{/*                ) : null*/}
{/*            )}*/}
{/*            <td*/}
{/*                onClick={() => {*/}
{/*                   setUpdateForm(true)*/}
{/*                   setCurrentCustomer(customer)*/}

{/*                }}*/}
{/*                className="py-3 px-6 text-left capitalize cursor-pointer text-blue-600 hover:underline font-bold"*/}
{/*            >*/}
{/*                Edit*/}
{/*            </td>*/}
{/*            <td onClick={()=>{*/}
{/*                deleteCustomer(customer.customerId).then(*/}
{/*                    ()=>{*/}
{/*                        location.reload()*/}
{/*                    }*/}
{/*                )*/}

{/*            }}*/}
{/*                className="py-3 px-6 text-left capitalize cursor-pointer text-red-600 hover:underline font-bold">*/}
{/*                Remove*/}
{/*            </td>*/}
{/*        </tr>*/}
{/*    ))}*/}
{/*    </tbody>*/}
{/*</table>*/}