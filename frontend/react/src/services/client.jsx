import axios from "axios";

const apiUrl = "/api";
export const getCustomers =async ()=>{


    try {
       return await axios.get(`http://customerapi.us-west-1.elasticbeanstalk.com:8080/api/v1/customers`)
   }
   catch (error) {
       console.log(error);
   }
}


export const updateCustomer =async (customer)=>{
    try {
        return (await axios.post(`http://customerapi.us-west-1.elasticbeanstalk.com:8080/api/v1/customers`,customer))
    }
    catch (error) {
        throw error;
    }
}
export const deleteCustomer =async (id)=>{
    try {
        const response = await axios.delete(`http://customerapi.us-west-1.elasticbeanstalk.com:8080/api/v1/customers/${id}`);
        console.log('Customer deleted successfully', response.data); // Optionally log the response
        return response.data; //const response = await axios.delete(`${import.meta.env.VITE_API_BASE_URL}/api/v1/customers/${id}`);

    }
    catch (error) {
        throw error;
    }
}