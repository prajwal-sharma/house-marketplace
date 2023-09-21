import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";

function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: "",
    password: "",
  });

  const { name, email, password } = formData;

  const navigate = useNavigate();
  const onChange = (e) => {
        setFormData((prevState)=>({
            ...prevState,
            [e.target.id]: e.target.value
        }));
  };

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <form>
        <input
            type="text"
            className="nameInput"
            id="name"
            placeholder="User Name"
            value={name}
            onChange={onChange}
          />
          <input
            type="email"
            className="emailInput"
            id="email"
            placeholder="Email"
            value={email}
            onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="passwordInput"
              id="password"
              value={password}
              onChange={onChange}
            />
            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prevState) => !prevState)}
            />
          </div>
          <Link to="/forgot-password" className="forgotPasswordLInk">
            Forgot Password?
          </Link>
          <div className="signInBar">
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#ffffff" width="34px" height="34px"/>
            </button>
          </div>
        </form>
        {/* Google oAuth */}
        <Link to='/sign-in' className="registerLink" >Sign In Instead</Link>
      </div>
    </>
  );
}

export default SignUp;
