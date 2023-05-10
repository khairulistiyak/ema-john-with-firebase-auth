import React, { useContext, useState } from 'react';
import "./SignUp.css"
import { Link } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';
const SignUp = () => {
    const [error, setError] = useState('')
    const { createUser, logIn } = useContext(AuthContext)

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.Password.value;
        const confirm = form.confirm.value;
        // console.log(email, password, confirm)
        setError('')
        if (password !== confirm) {
            setError("Your Password did not match")
            return
        }
        else if (password.length < 6) {
            setError("Password must be 6 characters or longer")
            return
        }
        else {
            setError('')
        }
        // create user 
        createUser(email, password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
            })
            .catch(error => {
                console.error(error)
                setError(error)
            })



    }
    return (
        <div className='form-container'>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <div className='form-control'>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="">Password</label>
                    <input type="Password" name="Password" id="" required />
                </div>
                <div className='form-control'>
                    <label htmlFor="confirm">Confirm Password</label>
                    <input type="Password" name="confirm" id="" required />
                </div>
                <input className='btn-submit' type="submit" value="Sign Up" />
            </form>
            <p><small>Already have an account? <Link to={'/login'}>LogIn</Link> </small></p>
            <p className='text-error'><small>{error}</small></p>
            <hr /><hr />
        </div>
    );
};

export default SignUp;