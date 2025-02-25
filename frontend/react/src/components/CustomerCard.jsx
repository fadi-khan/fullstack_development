import {Avatar} from "./Avatar.jsx";
import Options from "./Options.jsx";

export function CustomerCard({customers , setCurrentCustomer ,setUpdateFormBar }) {
    return  (
        <div className={"  py-4 items-center justify-center flex flex-wrap   text-center gap-10  "}>
            {
                customers.map((customer, index) => (
                    <div
                        className={"  hover:float-right    hover:drop-shadow hover:shadow-lg  shadow hover:shadow-green-900 hover:border-green-900  transform transition transform-origin-center duration-300 .  border rounded-lg    sm:w-1/3 md:w-1/3 lg:w-1/4 xl:w-1/5 will-change-transform"}>
                        <div className="absolute top-2 right-2">
                            <Options customer={customer} setCurrentCustomer={setCurrentCustomer} setUpdateFormBar={setUpdateFormBar}  />
                        </div>
                        <img src={"cover.jpeg"} alt={"cover"} className={" opacity-80 h-24 w-full rounded-t-lg "}/>

                        <div className={"  flex justify-center items-center relative -mt-8  "}><Avatar
                            rest={" w-20 h-20  bg-black"}/></div>

                        <h1 className={"p-2  text-green-700 font-bold"}> {customer.firstName + " " + customer.lastName}</h1>
                        <p className={"text-gray-400 text-sm pb-2"}>{customer.email}</p>

                        <p className={"px-2"}> {customer.phone}</p>


                        <div className={"justify-between w-full flex px-4 py-2"}>
                            <div className={"flex gap-2"}>
                                <label className={"text-green-700 font-bold"}>Age</label>
                                <div>{customer.age}</div>
                            </div>
                            <div className={"text-green-700"}>{customer.gender}</div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}
