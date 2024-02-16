import Header from "./Header";
import useNowPlayingMovie from "../HOOKS/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
    useNowPlayingMovie();
    return (
        <>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </>
    );
};

export default Browse;
