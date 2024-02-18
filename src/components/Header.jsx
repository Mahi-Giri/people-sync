import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../Utils/userSlice";
import { NETFLIX_LOGO, USER_LOGO } from "../Utils/constant";
import { toggleSearchView } from "../Utils/searchSlice";

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);
    const showSearch = useSelector((store) => store.search?.showSearch);

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

    const handleSearch = () => {
        dispatch(toggleSearchView());
    };

    return (
        <header className="flex absolute justify-between w-full px-8 py-2 bg-gradient-to-b from-black z-10">
            <img className="w-48" src={NETFLIX_LOGO} alt="logo" />
            {user && (
                <div className="flex gap-2 p-4">
                    <button
                        className="bg-purple-400 font-bold text-white m-auto mr-3 px-4 py-1 rounded-md hover:opacity-80"
                        onClick={handleSearch}>
                        {showSearch ? "Home" : "Search"}
                    </button>
                    <img className="w-9 h-9 mt-2" src={USER_LOGO} alt="UserLogo" />
                    <button onClick={handleSignOut} className="text-white font-bold">
                        Sign Out
                    </button>
                </div>
            )}
        </header>
    );
};

export default Header;
