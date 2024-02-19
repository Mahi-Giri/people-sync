import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovie } from "../Utils/movieSlice";
import { API_OPTIONS } from "../Utils/constant";

const useNowPlayingMovie = () => {
    const dispatch = useDispatch();

    const nowPlayingMovie = useSelector((store) => store.movies.nowPlayingMovie);

    const getNowPlayingMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
        const data = await response.json();
        dispatch(addNowPlayingMovie(data?.results));
    };

    useEffect(() => {
        !nowPlayingMovie && getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovie;
