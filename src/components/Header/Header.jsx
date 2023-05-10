import React, { useContext } from 'react';
import './Header.css';
import logo from '../../images/Logo.svg';
import { Link } from 'react-router-dom';
import AuthProvider, { AuthContext } from '../provider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <nav className='header'>
            <img src={logo} alt="" />
            <div>
                <Link to="/">Shop</Link>
                <Link to="/orders">Orders</Link>
                <Link to="/inventory">Inventory</Link>


                {!user ? <>
                    <Link to="/signup">Sign Up</Link>
                    <Link to="/login">Login</Link>
                </> :

                    <>
                        <>
                            <span className='text-white'>{user.email}  </span>
                            <img className='chat-light' />
                        </>

                        <button className='btn' onClick={handleSignOut}>Log Out </button>
                    </>}


            </div>

        </nav>
    );
};

export default Header;