import axios from "axios";

const apiUrl = "/api";
export const getCustomers =async ()=>{


    try {
       return await axios.get(`${apiUrl}/v1/customers`)
   }
   catch (error) {
       console.log(error);
   }
}


export const updateCustomer =async (customer)=>{
    try {
        return (await axios.post(`${apiUrl}/v1/customers`,customer))
    }
    catch (error) {
        throw error;
    }
}
export const deleteCustomer =async (id)=>{
    try {
        const response = await axios.delete(`${import.meta.env.NEXT_PUBLIC_API_URL}/${id}`);
        console.log('Customer deleted successfully', response.data); // Optionally log the response
        return response.data; //const response = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/v1/customers/${id}`);

    }
    catch (error) {
        throw error;
    }
}