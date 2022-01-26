import axios from "axios";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, sendEmailVerification } from "firebase/auth";
import { toast } from 'react-toastify';
import { useEffect, useState } from "react";
import firebaseAuthentication from "../Firebase/firebase.init";

firebaseAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [admin, setAdmin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [openAlert, setOpenAlert] = useState(true);
    const [isSent, setIsSent] = useState(false);

    //my database url
    const databaseUrl = 'https://rizas-parlour.herokuapp.com';

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const handleCreateUser = (name, email, password, navigate) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const newUser = { email, displayName: name };
                setUser(newUser)
                // saveUser(newUser, 'post');
                handleUpdateUser(name);
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => navigate('/verification'));
    };

    const handleUpdateUser = name => {
        updateProfile(auth.currentUser, {
            displayName: name
        }).then(() => {
            // Profile updated!
            // ...
        }).catch((error) => {
            setError(error.message);
        });
    }

    const handleUserLogin = (email, password, navigate, location) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const destination = location?.state?.from || '/';
                navigate(destination);
            })
            .catch((error) => {
                setError(error.message);
            });
    }


    const handleGoogleLogin = (navigate, location) => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                const newUser = {
                    email: user.email,
                    displayName: user.displayName
                }
                // saveUser(newUser, 'put');
                const destination = location?.state?.from || '/';
                navigate(destination);
                handleToast('success', 'logged in successfully!');
            })
            .catch(error => {
                setError(error.message);
            });
    };

    const handleLogOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
        }).catch((error) => {
            // An error happened.
            setUser({});
            setError(error.message);
        });
    };

    // manage user
    useEffect(() => {
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                // User is signed out
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    //verification handler
    const handleVarify = navigate => {
        sendEmailVerification(auth.currentUser)
            .then(() => {
                setIsSent(true);
            })
            .finally(() => navigate('/'));
    };

    const handleToast = (type, message) => {
        switch (type) {
            case 'error':
                toast.error(message);
                break;
            case 'warning':
                toast.warning(message);
                break;
            case 'success':
                toast.success(message);
                break;
            default:
                toast(message);
        }
    }

    //save user to db
    // const saveUser = (newUser, method) => {
    //     if (method === 'put') {
    //         axios.put(`${databaseUrl}/users`, newUser)
    //             .then()
    //     }
    //     else {
    //         axios.post(`${databaseUrl}/users`, newUser)
    //             .then()
    //     }

    // };

    // // check admin
    // useEffect(() => {
    //     axios.get(`${databaseUrl}/users?email=${user.email}`)
    //         .then(res => setAdmin(res.data.admin))
    //         .catch()
    // }, [user.email]);

    return {
        user,
        error,
        admin,
        isLoading,
        openAlert,
        setOpenAlert,
        databaseUrl,
        handleLogOut,
        handleUserLogin,
        handleCreateUser,
        handleGoogleLogin,
        handleVarify,
        isSent,
        handleToast
    }
};

export default useFirebase;