import Header from "./Header";
import useNowPlayingMovie from "../Hooks/useNowPlayingMovie";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../Hooks/usePopular";
import useTopRated from "../Hooks/useTopRated";
import useUpcoming from "../Hooks/useUpcoming";
import { Search } from "react-bootstrap-icons";
import { useSelector } from "react-redux";

const Browse = () => {
    const showSearch = useSelector((store) => store.search?.showSearch);

    useNowPlayingMovie();
    usePopular();
    useTopRated();
    useUpcoming();

    return (
        <>
            <Header />
            {showSearch ? (
                <Search />
            ) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}
        </>
    );
};

export default Browse;
