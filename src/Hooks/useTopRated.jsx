import { useDispatch } from "react-redux";
import { addTopRated} from "../Utils/movieSlice";
import { API_OPTIONS } from "../Utils/constant";
import { useEffect } from "react";

const useTopRated = () => {
    const dispatch = useDispatch();
    const getTopRated = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1", API_OPTIONS);
        const data = await response.json();
        dispatch(addTopRated(data?.results));
    };

    useEffect(() => {
        getTopRated();
    }, []);
};

export default useTopRated;

