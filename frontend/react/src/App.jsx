import Layout from "./components/Layout.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {About} from "./components/About.jsx";



const App = () => {
    return (


        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>} />  {/* Default page */}
                <Route path="/about" element={<About/>} />  {/* New Page */}
            </Routes>
        </BrowserRouter>



    )
}


export default App;