import { NETFLIX_LOGIN_BG } from "../Utils/constant";
import MovieSuggetion from "./MovieSuggetion";
import SearchBar from "./SearchBar";

const GPTSearch = () => {
    return (
        <div>
            <img className="absolute -z-10 h-full w-full opacity-70" src={NETFLIX_LOGIN_BG} alt="Bg-Logo" />
            <SearchBar />
            <MovieSuggetion />
        </div>
    );
};

export default GPTSearch;
