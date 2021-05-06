import React from 'react'
import { NavLink } from 'react-router-dom';
import { useHistory } from "react-router-dom";
import { IoArrowBackCircleSharp } from 'react-icons/io5';

const Signin = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    }

    return (
        <div>
            <IoArrowBackCircleSharp onClick={() => goBack()}/>
            signin
            <NavLink to="/login">login</NavLink>
        </div>
    )
}

export default Signin
