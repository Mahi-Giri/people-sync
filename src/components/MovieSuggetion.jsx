import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const MovieSuggetion = () => {
    const store = useSelector((store) => store?.search);
    const { name, movies } = store;
    if (!name || !movies) return;

    return (
        <div className="w-11/12 relative top-48 text-white m-auto rounded-lg">
            <div>
                {/* {name.map((name,index) => (
                    <MovieList key={name} title={name} movies={movies?.results[index]} />
                ))} */}
                <MovieList title={name} movies={movies?.results} />
            </div>
        </div>
    );
};

export default MovieSuggetion;
