import { useLocation, useNavigate } from "react-router";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "@firebase/auth";
import { setDoc, doc, getDoc, serverTimestamp } from "@firebase/firestore";
import { db } from "../firebase.config";
import { toast } from 'react-toastify'
import googleIcon from '../assets/svg/googleIcon.svg'

function OAuth() {
    const navigate = useNavigate()

    const location = useLocation()
    const onGoogleClick = async () => {

        try {
            const auth = getAuth()
            const provider = new GoogleAuthProvider()
            const result = await signInWithPopup(auth, provider)

            // chack for user
            const user = result.user
            const docRef = doc(db, 'users', user.uid)
            const docSnap = await getDoc(docRef)
            //if user doesn't exist create user
            if(!docSnap.exists()){
                await setDoc(doc(db,'users', user.uid),{
                    name: user.displayName,
                    email: user.email,
                    timeStamp : serverTimestamp()
                })
            }

            navigate('/')
        } catch (error) {
            toast.error("Couldn't authorize with Google")
        }

    }

    return (
        <div className="socialLogin">
            <p>Sign {location.pathname === '/sign-up' ? 'Up' : 'In'} With</p>
            <button className="socialIconDiv" onClick={onGoogleClick}>
                <img className='socialIconImg' src={googleIcon} alt="google" />
            </button>
        </div>
    );
}

export default OAuth;