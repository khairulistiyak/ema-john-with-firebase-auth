import React, { useContext, useState } from "react";
import "./Login.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  // console.log(location)
  const from = location.state?.from?.pathname || "/";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // login user
    signIn(email, password)
      .then((logInUser) => {
        const loggedUser = logInUser.user;
        navigate(from, { replace: true });
        console.log(logInUser);
      })
      .catch((error) => {
        console.error(error.massage);
      });
  };

  return (
    <div className="form-container">
      <h2 className="form-title">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="form-control">
          <label htmlFor="">Password</label>
          <input
            type={show ? "text" : "password"}
            name="password"
            id=""
            required
          />
          <p onClick={() => setShow(!show)}>
            <small>
              {" "}
              {show ? <span>Hide password</span> : <span>Show Password</span>}
            </small>
          </p>
        </div>
        <input className="btn-submit" type="submit" value="Login" />
      </form>
      <p>
        <small>
          Already have an account? <Link to={"/signup"}> SignUp</Link>{" "}
        </small>
      </p>
    </div>
  );
};

export default Login;
