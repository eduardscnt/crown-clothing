import { signInWithGooglePopup,createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils";


const SignIN = () =>{
    const logGoogleUser = async()=>{
        const {user} = await signInWithGooglePopup();
        const UserDocRef = await  createUserDocumentFromAuth(user);
    }
    return(
        <div>
            <h1>Sign IN</h1>
            <button onClick={logGoogleUser}>Sign in with Google Popup</button>
        </div>
    );
    };
    
    
    export default SignIN;