
import {useEffect, useState} from "react";
import {getCustomers} from "../services/client.jsx";
import LoadingSpinner from "./LoadingSpinner.jsx";




export const Body = () => {

    const [customers, setCustomers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {

         setLoading(true);

           getCustomers().then(response => {
               setCustomers(response.data);

           }).catch((error) => {
               console.log(error);
           }).finally(
                () => setLoading(false),
           )

    }, []
    );

    return (
        <div className={"flex-1  p-6 overflow-y-auto "}>

            {
                !loading ? customers.map(customer => (
                <main key={customer.id} className={"  text-white overflow-y-auto"}>{customer.firstName}</main>))
                :<LoadingSpinner/>

            }



        </div>

    )
}