import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from './screens/Home';
import About from "./screens/About";
import Root from "./Root";

// function Router(){
//     return (
//         <BrowserRouter>
//             <Header />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/about" element={<About />}/>
//             </Routes>
//         </BrowserRouter>
//     );
// }


const router = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        children: [
            {
                path:"",
                element: <Home />,
            },

            {
                path:"about",
                element: <About />
            }
        ]
    }
]);


export default router;