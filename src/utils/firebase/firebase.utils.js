import {initializeApp} from 'firebase/app';
import { 
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider 
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc

} from 'firebase/firestore'


const firebaseConfig = {

    apiKey: "AIzaSyAdHGyRTaxYCwaTnac_J2d7vbWu5pCG-uI",
  
    authDomain: "crown-clothing-db-638ba.firebaseapp.com",
  
    projectId: "crown-clothing-db-638ba",
  
    storageBucket: "crown-clothing-db-638ba.appspot.com",
  
    messagingSenderId: "1035952642479",
  
    appId: "1:1035952642479:web:a1fa30b78b2e9b44f1775a"
  
  };
  
  

  
  const firebaseApp = initializeApp(firebaseConfig);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({
    promt:'select_account'
  });

  export const auth= getAuth();
  export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider);

  export const db = getFirestore();
  export const createUserDocumentFromAuth = async(userAuth) =>{
    const UserDocRef = doc(db,'users',userAuth.uid);
    console.log(UserDocRef);
    const userSnapshot = await getDoc(UserDocRef);
    console.log(userSnapshot.exists);

    if(!userSnapshot.exists()){
      const{displayName,email} = userAuth;
      const createdAt = new Date();
      try{
        await setDoc(UserDocRef,{
          displayName,
          email,
          createdAt
        });
      }catch(error){
        console.log('error creating the user ',error.message);
    }
    
  }
  return UserDocRef;
}