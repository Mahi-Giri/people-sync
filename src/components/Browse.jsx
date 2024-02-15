import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";
import { useDispatch } from "react-redux";
import Header from "./Header";
import { addNowPlayingMovie } from "../Utils/movieSlice";

const Browse = () => {
    const dispatch = useDispatch();
    const getNowPlayingMovies = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/now_playing?page=1", API_OPTIONS);
        const data = await response.json();
        // console.log(data?.results);
        dispatch(addNowPlayingMovie(data?.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
    }, []);

    return (
        <div>
            <Header />
        </div>
    );
};

export default Browse;
