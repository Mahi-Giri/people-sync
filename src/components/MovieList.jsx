import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className="px-8">
            <h1 className="text-3xl py-4 text-white">{title}</h1>
            <div className="card flex overflow-x-scroll">
                <div className="flex gap-2">
                    {movies && movies.map((movie) => <MovieCard key={movie.id} poster_path={movie.poster_path} />)}
                </div>
            </div>
        </div>
    );
};

export default MovieList;