import React, { useEffect, useState } from "react";
import { getCustomers} from "../services/client.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import {UpdateForm} from "./UpdateForm.jsx";

import {CustomerCard} from "./CustomerCard.jsx";
import {useNavigate} from "react-router-dom";

import PhoneInput from "react-phone-number-input";
import {ConfirmationMessage} from "./ConfirmationMessage.jsx";




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