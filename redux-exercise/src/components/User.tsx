import { useDispatch, useSelector } from "react-redux";
import  type { RootState, AppDispatch } from "../store/store";
import { incrementAge, setFirstname, setLastname } from "../features/User/UserSlice";

export default function User(){
    const dispatch = useDispatch<AppDispatch>();

    const firstname = useSelector((state: RootState) => state.user.firstname)
    const lastname = useSelector((state: RootState) => state.user.lastname);
    const age = useSelector((state:RootState) => state.user.age);

    return(
        <div style={{padding:"2rem", fontFamily:"sans-serif"}}>
            <h2>User Info</h2>

            <p><strong>Firstname:</strong>{firstname}</p>
            <p><strong>Lastname:</strong>{lastname}</p>
            <p><strong>Age:</strong>{age}</p>

            <button onClick={() => dispatch(incrementAge())} style={{marginTop:"1rem", padding:"0.5rem 1rem"}}>
                Increment Age
            </button>
            <div style={{ marginTop: "2rem" }}>
                <input type="text" placeholder="Firstname" onChange={(e) => dispatch(setFirstname(e.target.value))}
                style={{ display: "block", marginBottom: "1rem", padding: "0.5rem" }}/>

                <input type="text" placeholder="Lastname" onChange={(e) => dispatch(setLastname(e.target.value))}
                style={{ display: "block", marginBottom: "1rem", padding: "0.5rem" }}/>
            </div>
        </div>
    )
}