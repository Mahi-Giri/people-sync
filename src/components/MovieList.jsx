import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
    return (
        <div className="mt-12 px-8">
            <h1 className="text-2xl py-4 text-white hover:text-gray-400 cursor-pointer">{title}</h1>
            <div className="card flex overflow-x-scroll">
                <div className="flex gap-4">
                    {movies && movies.map((movie) => <MovieCard key={movie?.id} poster_path={movie?.poster_path} />)}
                </div>
            </div>
        </div>
    );
};

export default MovieList;