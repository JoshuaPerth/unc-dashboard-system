import { getAuth } from "firebase/auth";

const logout = function(){
    const auth = getAuth();
    auth.signOut();
    
}

export default logout;