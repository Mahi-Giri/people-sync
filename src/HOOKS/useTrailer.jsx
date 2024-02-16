import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../Utils/movieSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../Utils/constant";

const useTrailer = (id) => {
    const dispatch = useDispatch();
    const getMovieVideo = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/" + id + "/videos?language=en-US", API_OPTIONS);
        const data = await response.json();

        const filterData = data.results.filter((video) => video.type === "Trailer");
        const trailer = filterData.length ? filterData[0] : data.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getMovieVideo();
    }, []);
};

export default useTrailer;
