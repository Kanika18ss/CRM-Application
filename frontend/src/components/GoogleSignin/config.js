import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA1PAhnN4erLovZQyHQhP0aARCERaEXOqM",
  authDomain: "crm-model.firebaseapp.com",
  projectId: "crm-model",
  storageBucket: "crm-model.appspot.com",
  messagingSenderId: "893269524605",
  appId: "1:893269524605:web:14ced92b4f48f522f8b114",
  measurementId: "G-V238CJRG4L"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const provider=new GoogleAuthProvider();
export{auth,provider};