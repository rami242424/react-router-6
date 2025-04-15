import { useOutletContext } from "react-router-dom";

interface IFollowerCtx {
    nameOfMyUser: string,

}

function Follower() {
    //const ctx = useOutletContext();
    //console.log(ctx);
    const {nameOfMyUser} = useOutletContext<IFollowerCtx>();

    return(
    <>
        <hr />
        <h1>This is Follower page</h1>
        <span>💥{nameOfMyUser}'s follower list are here</span>
    </> 
    );
}

export default Follower;