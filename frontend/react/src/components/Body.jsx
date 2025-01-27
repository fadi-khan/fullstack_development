import {TopBar} from "./TopBar.jsx";
import {useEffect, useState} from "react";
import {getCustomers} from "../services/client.jsx";

export const Body = () => {

    const [customers, setCustomers] = useState([]);
    useEffect(() => {
        getCustomers().then(response => {
            setCustomers(response.data);
            console.log(response.data);
        }).catch((error) => {
            console.log(error);
        })
    }, []);

    return (
        <div className={"text-white"}>
            <TopBar/>
            {
                customers.map(customer => (
                    <div key={customer.id} className={"text-white text-center"}>{customer.firstName}</div>
                ))
            }


        </div>
    )
}