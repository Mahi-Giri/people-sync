import { useDispatch } from "react-redux";
import { addPopular } from "../Utils/movieSlice";
import { API_OPTIONS } from "../Utils/constant";
import { useEffect } from "react";

const usePopular = () => {
    const dispatch = useDispatch();
    const getPopular = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
        const data = await response.json();
        dispatch(addPopular(data?.results));
    };

    useEffect(() => {
        getPopular();
    }, []);
};

export default usePopular;
