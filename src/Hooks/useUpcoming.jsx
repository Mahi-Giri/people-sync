import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcoming } from "../Utils/movieSlice";
import { API_OPTIONS } from "../Utils/constant";

const useUpcoming = () => {
    const dispatch = useDispatch();

    const upcoming = useSelector((store) => store.movies.upcoming);

    const getUpcoming = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
        const data = await response.json();
        dispatch(addUpcoming(data?.results));
    };

    useEffect(() => {
        !upcoming && getUpcoming();
    }, []);
};

export default useUpcoming;
