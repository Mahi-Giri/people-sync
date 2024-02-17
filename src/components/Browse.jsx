import Header from "./Header";
import useNowPlayingMovie from "../Hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../Hooks/usePopular";
import useTopRated from "../Hooks/useTopRated";
import useUpcoming from "../Hooks/useUpcoming";

const Browse = () => {
    useNowPlayingMovie();
    usePopular();
    useTopRated();
    useUpcoming();

    return (
        <>
            <Header />
            <MainContainer />
            <SecondaryContainer />
        </>
    );
};

export default Browse;
