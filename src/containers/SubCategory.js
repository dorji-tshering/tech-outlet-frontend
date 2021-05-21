import React from 'react'
import { NavLink } from 'react-router-dom'

const SubCategory = ({ match }) => {
        return (
                <div>
                        <h3>Sub Category=items</h3>
                        <NavLink to={`${match.url}/id=12334`}>On7 Prime</NavLink>     
                </div>
        )
}

export default SubCategory;
