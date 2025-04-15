import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from './screens/Home';
import About from "./screens/About";
import Root from "./Root";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";

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
// export default Router;

const router = createBrowserRouter([
    {
        path:"/",
        element: <Root />,
        children: [
            {
                path:"",
                element: <Home />,
                errorElement: <ErrorComponent />
            },

            {
                path:"about",
                element: <About />,
            }
        ],
        errorElement: <NotFound/> //라우트 에러뿐 아니라 컴포넌트 내부 JS 에러도 잡음
    }
]);


export default router;