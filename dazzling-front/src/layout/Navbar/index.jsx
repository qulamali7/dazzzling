import React from 'react'
import "./index.scss";
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <header id='header'>
                <div className='header_container'>
                    <div className='header_area'>
                        <div className='header_title'>
                            <h1 to="/">Dazzling Demo</h1>
                        </div>
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/add">Add</Link>
                                </li>
                                <li>
                                    <Link>Basket</Link>
                                </li>
                                <li>
                                    <Link to="/wishlist">Wishlist</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar