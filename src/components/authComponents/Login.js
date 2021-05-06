import React from 'react'
import { IoArrowBackCircleSharp } from 'react-icons/io5';
import { useHistory } from "react-router-dom";


const Login = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return (
        <div>
            <IoArrowBackCircleSharp onClick={() => goBack()}/>
            loginhello
        </div>
    )
}

export default Login;
