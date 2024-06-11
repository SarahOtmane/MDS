import { useEffect } from "react";
import { useNavigate } from "react-router-dom";




const Account = () =>{
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token)  navigate('/user/login')
        else navigate('/user/my-account/order');
    }, [navigate]);


    return null
}

export default Account;