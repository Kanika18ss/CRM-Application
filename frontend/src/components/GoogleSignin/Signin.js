import React, { useEffect ,useState} from "react";
import { auth, provider } from "./config";
import { signInWithPopup } from "firebase/auth";
import Create from '../Create';

function Signin() {
    const [user, setUser] = useState(null);
    const [error, setError] = useState("");

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        if (storedEmail) {
            setUser(extractName(storedEmail));
        }
    }, []);

    const handleClick = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                const userEmail = data.user.email;
                setUser(extractName(userEmail));
                localStorage.setItem("email", userEmail);
            })
            .catch((error) => {
                console.error("Error signing in:", error);
                setError("Failed to sign in. Please try again.");
            });
    };

   
    const extractName = (email) => {
        return email.split("@")[0];
    };

    return (
        <div>
            {user ? (
                <div>
                    <p>Hello {user}, here is
                    10% off on your next order</p>
                    <Create />
                </div>
            ) : (
                <>
                    <button onClick={handleClick}>Sign in with Google</button>
                    {error && <p>{error}</p>}
                </>
            )}
        </div>
    );
}

export default Signin;
