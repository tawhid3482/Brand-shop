import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UseHook = () => {
    const all = useContext(AuthContext)
    
    return all
};

export default UseHook