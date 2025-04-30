// 방법1 : useParams로 정보 받아오기기
// import { useParams } from "react-router-dom";
// import { users } from "../db";
// import Followers from './Followers';
// function Followers(){
//     const {userId} = useParams();
//     return (
//         <>
//             <h1>Followers</h1>
//             <h3>This is {users[Number(userId)-1].name}'s followers</h3>
//         </>
//     );
// }
// export default Followers;



// 방법2-1 : Outlet context로 받아오기(풀코드)
// import { useOutletContext } from "react-router-dom";
// interface Ictx {
//     nameOfMyUsers: string;
// }
// function Followers(){
//     const ctx = useOutletContext<Ictx>();
//     return (
//         <>
//             <h1>Followers</h1>
//             <h3>This is ✔️{ctx.nameOfMyUsers}'s✔️ followers</h3>
//         </>
//     );
// }

// export default Followers;



// 방법2-2 : Outlet context로 받아오기(축약코드)
import { useOutletContext } from "react-router-dom";
interface IFollowersContext {
    nameOfMyUsers: string;
}
function Followers(){
    const {nameOfMyUsers} = useOutletContext<IFollowersContext>();
    return (
        <>
            <h1>Followers</h1>
            <h3>This is ✔️{nameOfMyUsers}'s✔️ followers</h3>
        </>
    );
}

export default Followers;