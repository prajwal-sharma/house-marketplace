import { useState } from "react";
import {toast} from 'react-toastify'
import { Link, useNavigate } from "react-router-dom";
import {getAuth ,createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import { setDoc , doc, serverTimestamp } from "firebase/firestore";
import {db} from '../firebase.config'; 
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import OAuth from "../components/OAuth";
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

  const onSubmit = async (e)=>{
    e.preventDefault()

    try{
      const auth = getAuth()

      const userCredentials = await createUserWithEmailAndPassword(auth ,email,password)

      const user = userCredentials.user
      updateProfile(auth.currentUser , {
        displayName : name
      })

      const formDataCopy = {...formData}

      delete formDataCopy.password
      formDataCopy.timeStamp = serverTimestamp()

      await setDoc(doc(db,'users', user.uid),formDataCopy)

      navigate('/')
    }catch(error){
      toast.error("Something Went wrong with registration!")
    }
  }

  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="pageHeader">Welcome Back!</p>
        </header>
        <form onSubmit={onSubmit}>
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
          {/* <Link to="/forgot-password" className="forgotPasswordLInk">
            Forgot Password?
          </Link> */}
          <div className="signInBar">
            <p className="signInText">Sign Up</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#ffffff" width="34px" height="34px"/>
            </button>
          </div>
        </form>
        <OAuth></OAuth>
        <Link to='/sign-in' className="registerLink" >Sign In Instead</Link>
      </div>
    </>
  );
}

export default SignUp;
