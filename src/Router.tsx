import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from './screens/Home';
import About from "./screens/About";

function Router(){
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default Router;