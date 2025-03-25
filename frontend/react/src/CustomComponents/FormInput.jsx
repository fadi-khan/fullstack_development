import React from "react";
import {CountrySelector} from "../components/CountrySelector.jsx";


export const FormInput = ({ name ,value ,type ,errorMsg, inputLabel, onChange, placeholder })=> {
   return (
       <div className={"flex flex-col  gap-y-1  "}>
           <label id={"formLabel"}>{inputLabel} </label>

           <div className={"flex w-full items-center"}>

               <input
                   id={"formInput"}

                   type={type}
                   className={" rounded-xl border border-gray-600 border-opacity-60   "}
                   name={name}
                   value={value}
                   onChange={onChange}
                   required={true}
                   placeholder={placeholder}



               />
           </div>


           <label className={"text-red-600 text-sm h-6 "}>{errorMsg} </label>
       </div>
   )
}