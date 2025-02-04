import { useEffect, useState } from "react";
import {deleteCustomer, getCustomers} from "../services/client.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";
import { useNavigate } from "react-router-dom";

export const Table = () => {
    const [columns, setColumn] = useState([]);
    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false); // new error state

    const navigate = useNavigate();

    useEffect(() => {
        setLoading(true);

        getCustomers()
            .then((response) => {
                if (response.data && response.data.length > 0) {
                    setCustomers(response.data);
                    setColumn(Object.keys(response.data[0]));
                }
            })
            .catch((error) => {
                console.error("Error fetching customers:", error);
                setError(true); // set error if the backend request fails
            })
            .finally(() => setLoading(false));
    }, []);

    // Render a spinner while loading
    if (loading) {
        return <LoadingSpinner />;
    }

    // If there's an error or no customer data, render nothing (or an optional message)
    if (error || customers.length === 0) {
        return null; // or you could return <div>No data available.</div>
    }

    return (
        <div className="overflow-auto rounded">
            <table className="min-w-full border-collapse shadow-md">
                <thead className="bg-gray-800 uppercase text-sm">
                <tr className="border-b border-collapse border-gray-600 select-text">
                    {columns.map((column, i) =>
                        i > 0 ? (
                            <th key={i} className="py-3 px-6 text-left">
                                {column}
                            </th>
                        ) : null
                    )}
                    <th className="py-3 px-6 text-left capitalize underline cursor-pointer text-green-800"></th>
                    <th className="py-3 px-6 text-left capitalize underline cursor-pointer text-green-800"></th>
                </tr>
                </thead>
                <tbody>
                {customers.map((customer, i) => (
                    <tr
                        key={i}
                        className="border-collapse border-b border-gray-600 border-opacity-30 hover:bg-green-800"
                    >
                        {columns.map((column, j) =>
                            j > 0 ? (
                                <td key={j} className="py-4 px-6 text-left">
                                    {customer[column]}
                                </td>
                            ) : null
                        )}
                        <td
                            onClick={() => {
                                navigate("about",{state:customer});
                                console.log(customer)
                            }}
                            className="py-3 px-6 text-left capitalize cursor-pointer text-blue-600 hover:underline font-bold"
                        >
                            Edit
                        </td>
                        <td onClick={()=>{
                            deleteCustomer(customer.customerId).then(
                                ()=>{
                                    location.reload()
                                }
                            )

                        }}
                            className="py-3 px-6 text-left capitalize cursor-pointer text-red-600 hover:underline font-bold">
                            Remove
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
