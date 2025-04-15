import { BrowserRouter, createBrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from './screens/Home';
import About from "./screens/About";
import NotFound from "./screens/NotFound";
import ErrorComponent from "./components/ErrorComponent";
import App from "./App";
import User from "./screens/users/Users";
import Follower from "./screens/users/Follower";

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
        element: <App />,
        children: [
            {
                path:"",
                element: <Home />,
                errorElement: <ErrorComponent />
            },

            {
                path:"about",
                element: <About />,
            },

            {
                path: "users/:key",
                element: <User />,
                children: [
                    {
                        path:"follower",
                        element: <Follower />,
                    }
                ]
            }
        ],
        errorElement: <NotFound/> //라우트 에러뿐 아니라 컴포넌트 내부 JS 에러도 잡음
    }
]);


export default router;