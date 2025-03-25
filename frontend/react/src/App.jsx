import Layout from "./components/Layout.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About} from "./components/About.jsx";
import {SaveForm} from "./components/SaveForm.jsx";
import {Home} from "./components/Home.jsx";



const App = () => {
    return (




        <BrowserRouter>
            <Routes>
                {/* Main layout wrapper */}.0000000000
                <Route path="/" element={<Layout />}>
                    {/* Index route (home page) */}
                    <Route index element={<Home />} />

                    {/* Nested routes */}
                    <Route path="/addCustomer" element={<SaveForm />} />
                    <Route path="/about" element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>

    )
}


export default App;