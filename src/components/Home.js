import React from 'react'
import Navbar from './homeComponents/Navbar'
import Offers from './homeComponents/Offers'
import Search from './homeComponents/Search'

const Home = () => {
    return (
        <div className="top-container">
            <Navbar/>
            <Search/>
            <Offers/>
        </div>
    )
}

export default Home;
