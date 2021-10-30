import  { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';


// custom Use Auth
const useAuth = () => {
    return useContext(AuthContext)
};

export default useAuth;