import { Outlet, useOutletContext, useParams } from "react-router-dom";
import { users } from "../db";
import { Link } from "react-router-dom";

function User(){
    console.log(useOutletContext(), "다크모드정보");
    // const params = useParams();
    // console.log(params);
    const { userId } = useParams();
    console.log(userId);
    return (
        <div>
            <h1>user id is ➡️ {userId}</h1>
            <h3>user name is ➡️ {users[Number(userId)-1].name}</h3>
            <hr />
            <Link to="followers">See followers</Link>

            <Outlet 
                context={{
                    nameOfMyUsers : users[Number(userId)-1].name
            }}/>
        </div>
    );
}

export default User;