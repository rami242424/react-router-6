import { useParams } from "react-router-dom";
import { users } from "../db";

function User(){
    // const params = useParams();
    // console.log(params);
    const { userId } = useParams();
    console.log(userId);
    return (
        <div>
            <h1>user id is ➡️ {userId}</h1>
            <h3>user name is ➡️ {users[Number(userId)-1].name}</h3>
        </div>
    );
}

export default User;