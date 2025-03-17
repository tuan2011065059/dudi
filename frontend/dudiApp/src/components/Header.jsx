import React from 'react'
import './Header.css'

const Header = () => {

    return (
        <>
            <div className='header'>
                <div className='container'>
                    <div className='logo'>
                        <img src="/src/img/ab9f7f8cd2337a044ca2d1bb5bc7926e.jpg" alt="Logo" />
                    </div>
                    <div className='nav'>
                        <ul>
                            <li>
                                About Us
                            </li>
                            <li>
                                Services
                            </li>
                            <li>
                                Use Cases
                            </li>
                            <li>
                                Pricing
                            </li>
                            <li>
                                Blog
                            </li>
                            <button>Request a quote</button>
                            
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header