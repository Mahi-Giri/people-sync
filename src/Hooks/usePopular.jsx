import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPopular } from "../Utils/movieSlice";
import { API_OPTIONS } from "../Utils/constant";

const usePopular = () => {
    const dispatch = useDispatch();

    const popular = useSelector((store) => store.movies.popular);

    const getPopular = async () => {
        const response = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTIONS);
        const data = await response.json();
        dispatch(addPopular(data?.results));
    };

    useEffect(() => {
        !popular && getPopular();
    }, []);
};

export default usePopular;
