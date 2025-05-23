import { Link, useSearchParams } from "react-router-dom";
import { users } from "./db";

function Home(){
    const [readSearchParams, setSearchParams] = useSearchParams();
    console.log(readSearchParams.has("about"));
    setTimeout(()=> {
        setSearchParams({
            day: "today",
            tomorrow: "123",
        });
    }, 3000);
    return (
        <div>
            <ul>
                {users.map((user)=> (
                    <li key={user.id}>
                        <Link to={`/users/${user.id}`}>{user.name}</Link>
                        
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Home;

