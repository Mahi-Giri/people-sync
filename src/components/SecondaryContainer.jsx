import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies);
    return (
        <div className="bg-black">
            <div className="-mt-96 relative z-20">
                <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovie} />
                <MovieList title={"Trending"} movies={movies?.nowPlayingMovie} />
                <MovieList title={"Populer"} movies={movies?.nowPlayingMovie} />
                <MovieList title={"Up Comming"} movies={movies?.nowPlayingMovie} />
                <MovieList title={"Horror"} movies={movies?.nowPlayingMovie} />
            </div>
        </div>
    );
};

export default SecondaryContainer;
