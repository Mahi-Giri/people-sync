import { useDispatch } from "react-redux";
import { addTopRated, addUpcoming} from "../Utils/movieSlice";
import { API_OPTIONS } from "../Utils/constant";
import { useEffect } from "react";

const useUpcoming = () => {
    const dispatch = useDispatch();
    const getUpcoming = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", API_OPTIONS);
        const data = await response.json();
        dispatch(addUpcoming(data?.results));
    };

    useEffect(() => {
        getUpcoming();
    }, []);
};

export default useUpcoming;

