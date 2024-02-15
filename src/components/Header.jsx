import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { NETFLIX_LOGO, USER_LOGO } from "../Utils/constant";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {})
            .catch((error) => {
                navigate("/error");
            });
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL,
                    })
                );
                navigate("/browse");
            } else {
                dispatch(removeUser());
                navigate("/");
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div className="flex justify-between absolute w-full px-8 py-2 bg-gradient-to-b from-black z-10">
            <img className="w-48" src={NETFLIX_LOGO} alt="logo" />
            {user && (
                <div className="flex gap-2 p-4">
                    <img
                        className="w-9 h-9 mt-2"
                        src={USER_LOGO}
                        // src={user?.photoURL}
                        alt="UserLogo"
                    />
                    <button onClick={handleSignOut} className="text-white font-bold">
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    );
};

export default Header;
