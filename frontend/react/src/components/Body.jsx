
import { useState} from "react";

import {Table} from "./Table.jsx";
import {NewCustomer} from "./NewCustomer.jsx";




export const Body = () => {

    const [formBar,setFormBar] = useState(false )

    const toggleFormBar = () => {
        setFormBar(true)
    }
    return (
        <div className={`flex-1  p-6 overflow-auto `}>

            <button
                className={"font-bold py-2.5 bg-green-700 px-5 rounded mb-12 hover:opacity-80"}
                onClick={toggleFormBar}
            >
                Add new customer
            </button>
            {formBar? <NewCustomer formBar={formBar} setFormBar={setFormBar} />:""}
            <Table/>



        </div>

    )
}

