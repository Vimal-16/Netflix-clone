import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCU5Ozl4VJJTLTZkDKAxr_DLqfItCMUuis",
  authDomain: "netflix-clone-1606.firebaseapp.com",
  projectId: "netflix-clone-1606",
  storageBucket: "netflix-clone-1606.firebasestorage.app",
  messagingSenderId: "851016848491",
  appId: "1:851016848491:web:c2f3b1e73b8ce7fe72cd2e"
};


const app = initializeApp(firebaseConfig);

const auth= getAuth(app)
const db= getFirestore()

const signup= async(name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password);
        const user= res.user;
        await addDoc(collection(db,"user"),{
            uid: user.uid,
            name,
            authProvider:"local",
            email,
        });
    } catch (error) {
        console.log(error);
        toast.error(error.code)
    }
}

const login= async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password);
    } catch (error) {
        console.log(error);
        toast.error(error.code)
    }
}

const logout= ()=>{
    signOut(auth);
}

export{auth,db,login,signup,logout};