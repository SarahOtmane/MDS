import { useEffect } from "react";
import { useNavigate } from "react-router-dom";




const Account = () =>{
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const role = localStorage.getItem('role');
        if (!token)  navigate('/user/login');
        else if(role === 'user') navigate('/user/my-account/order');
        else if(role === 'artisan') navigate('artisan/my-account/order');
    }, [navigate]);


    return null
}

export default Account;