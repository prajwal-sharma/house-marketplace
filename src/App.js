import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Explore from "./pages/Explore";
import ForgotPassword from "./pages/ForgotPassword";
import Offers from "./pages/Offers";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn";
import Navbar from "./components/Navbar";
import 'react-toastify/dist/ReactToastify.css'

function App() {
  return (
   <>
    <Router>
      <Routes>
        <Route path="/" element = {<Explore/>}></Route>
        <Route path="/offers" element = {<Offers/>}></Route>
        <Route path="/sign-in" element = {<SignIn/>}></Route>
        <Route path="/sign-up" element = {<SignUp/>}></Route>
        <Route path="/forgot-password" element = {<ForgotPassword/>}></Route>
        <Route path="/profile" element = {<Profile/>}></Route>
      </Routes>
      <Navbar/>
    </Router>
    <ToastContainer></ToastContainer>
   </>
  );
}

export default App;
