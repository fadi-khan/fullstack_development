import * as countryCodesList from "country-codes-list";
import {useState} from "react";


export const CountrySelector = ({ value, onChange }) => {
    const countries = countryCodesList.all();
    const [showCountryCode, setShowCountryCode] = useState(false)


    const handleCountryCode = (country) => {

        if (onChange) {
            onChange(country.countryCode)
        }
        setShowCountryCode(false)

    }


    return (
        <div className={"relative  border  hover:border-opacity-100 border-white border-opacity-30 h-full mr-1 rounded-xl  "}>

                <button
                    type="button"
                    name={"phoneCode"}

                    onChange={onChange}

                    className={" z-50  w-12 h-full  "}
                    onClick={()=>setShowCountryCode(!showCountryCode)}
                >

                             {value}



                </button>

            {

                showCountryCode && (
                    <div className={"border border-green-700 border-opacity-30 rounded-lg z-50 absolute  h-96 md:right-0 mt-4    bg-black overflow-y-auto overflow-x-hidden  p-2 gap-y-2   "}>
                        {
                            countries.map((country) => (

                                    <div

                                        key={country.countryNameEn}
                                        className={"rounded-lg hover:bg-green-600 w-64 p-1 text-center "}
                                        onClick={()=>handleCountryCode(country)}
                                    >
                                        {country.countryNameEn}
                                    </div>

                            ))
                        }

                    </div>
                )
            }



        </div>

    )
};