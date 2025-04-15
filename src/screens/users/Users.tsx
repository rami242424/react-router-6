import { useParams } from "react-router-dom";
import { users } from "../../db";


function User(){
    const { key } = useParams();
    console.log(key);
    return (
        <h1>
           User id is {key}, User name is {users[Number(key) - 1].name}
        </h1>
    )
}

export default User;