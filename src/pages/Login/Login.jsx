import { Link } from "react-router-dom";
import { AnimatedPage } from "../../components";

import "./Login.scss";

function Login() {
  return (
    <AnimatedPage>
      <div className="login">
        <span className="login__title">Login</span>
        <form className="login__form">
          <label>Email</label>
          <input
            className="login__input"
            type="email"
            placeholder="Enter your email..."
          />
          <label>Password</label>
          <input
            className="login__input"
            type="password"
            placeholder="Enter your password..."
          />
          <Link to="/">
            <button className="login__button">Login</button>
          </Link>
          <button className="login__register-button">
            <Link to="/register">Register</Link>
          </button>
        </form>
      </div>
    </AnimatedPage>
  );
}

export default Login;
