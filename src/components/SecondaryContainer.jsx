import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return (
        <div className="bg-black">
            <div className="-mt-80 relative z-20">
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovie} />
                <MovieList title={"Top Rated"} movies={movies?.topRated} />
                <MovieList title={"Upcoming"} movies={movies?.upcoming} />
                <MovieList title={"Populer"} movies={movies?.popular} />
                <MovieList title={"Horror"} movies={movies?.nowPlayingMovie} />
            </div>
        </div>
    );
};

export default SecondaryContainer;
