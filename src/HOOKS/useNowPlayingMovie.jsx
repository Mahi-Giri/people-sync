import { useDispatch } from "react-redux";
import { addNowPlayingMovie } from "../Utils/movieSlice";
import { API_OPTIONS } from "../Utils/constant";
import { useEffect } from "react";

const useNowPlayingMovie = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
        const data = await response.json();
        dispatch(addNowPlayingMovie(data?.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);
};

export default useNowPlayingMovie;
