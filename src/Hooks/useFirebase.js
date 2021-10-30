import { getAuth, signInWithPopup, GoogleAuthProvider, signOut ,onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../component/LogIn/Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [loading, setLoading] = useState(true);
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // Google Sign In 
    const signInWithGoogle = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    //Observer onAuthStateChanged User
    useEffect(() => {
        const unsubcribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setLoading(false)
        })
        return () => unsubcribed;
    }, [])
    
    // LogOut User
    const logOut = () => {
        setLoading(true)
        signOut(auth)
            .then(() => {

            })
        .finally(()=> setLoading(false))
    }
    return {
        user,
        setUser,
        signInWithGoogle,
        logOut,
        loading,
        setLoading

    }
}
export default useFirebase;