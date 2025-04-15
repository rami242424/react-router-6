import { Outlet, useParams } from "react-router-dom";
import { users } from "../../db";
import { Link } from "react-router-dom";


function User(){
    const { key } = useParams();
    console.log(key);
    return (
        <>
            <h1>
            User id is {key}, User name is {users[Number(key) - 1].name}
            </h1>
            <hr />
            <Link to="follower">See {users[Number(key) - 1].name}'s Followers</Link>
            <Outlet />
        </>
    )
}

export default User;