import { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../Utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { NETFLIX_LOGIN_BG, USER_AVATAR } from "../Utils/constant";

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const dispatch = useDispatch();

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    

    const handleButtonClick = (event) => {
        event.preventDefault();
        const errorMessage = checkValidData(email.current.value, password.current.value);
        setErrorMessage(errorMessage);

        if (errorMessage) return;

        if (!isSignIn) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR,
                    })
                        .then(() => {
                            const { uid, email, displayName, photoURL } = auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL,
                                })
                            );
                        })
                        .catch((error) => {
                            setErrorMessage(error.Message);
                        });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    const user = userCredential.user;
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);
                });
        }
    };

    const toggleSignIn = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div>
            <Header />
            <div className="absolute">
                <img className="w-screen h-screen" src={NETFLIX_LOGIN_BG} alt="bg-img" />
            </div>
            <div className="absolute w-1/5 bg-black my-36 mx-auto right-0 left-0 rounded-lg bg-opacity-75">
                <form className="p-12 flex flex-col gap-3 py-6">
                    <h3 className="font-bold text-2xl text-white mt-5 mb-3">{isSignIn ? "Sign In" : "Sign Up"}</h3>
                    {!isSignIn && (
                        <input
                            className="py-2 px-3 w-full border-none rounded-md outline-none text-sm bg-gray-300"
                            type="text"
                            placeholder="Full Name"
                        />
                    )}
                    <input
                        ref={email}
                        className="py-2 px-3 w-full border-none rounded-md outline-none text-sm bg-gray-300"
                        type="text"
                        placeholder="Email or phone number"
                    />
                    <input
                        ref={password}
                        className="py-2 px-3 w-full border-none rounded-md outline-none text-sm bg-gray-300"
                        type="password"
                        placeholder="Password"
                    />
                    <p className="text-red-600 text-sm font-bold pt-1">{errorMessage}</p>
                    <button className="py-2 text-sm bg-red-700 w-full text-white rounded-md mt-4" onClick={handleButtonClick}>
                        {isSignIn ? "Sign In" : "Sign Up"}
                    </button>
                    <div className="flex justify-between text-white text-xs">
                        <div className="flex">
                            <input type="checkbox" id="input" className="mr-1" />
                            <label htmlFor="input" className="cursor-pointer">
                                Remember me
                            </label>
                        </div>
                        <span className="cursor-pointer">Need help?</span>
                    </div>
                    <div className="text-gray-300 mt-10 mb-16">
                        <p className="text-xs">
                            <span className="font-bold text-sm cursor-pointer" onClick={toggleSignIn}>
                                {isSignIn ? "New to Netflix? Sign up now." : "You already have a account. Sign In"}
                            </span>
                        </p>
                        <p className="text-xs mt-4 ">
                            This page protrcted by Google reCAPTCHA to ensure you're not a bot.{" "}
                            <span className="text-blue-500 cursor-pointer">Learn More</span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
