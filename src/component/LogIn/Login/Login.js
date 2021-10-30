import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';

const Login = () => {
    const { user, setUser, signInWithGoogle ,loading, setLoading} = useAuth();
    const history = useHistory()
    const location = useLocation()

    const url = location.state?.from || "/home"

    // For Rediract HandleGoogle
    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then(res => {
                setUser(res.user)
                history.push(url)
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false))
        
    }
    return (
        <div>
            <h1>Google Log in</h1>
            <button onClick={handleGoogleSignIn} className="btn btn-primary">Log In Google</button>
        </div>
    );
};

export default Login;