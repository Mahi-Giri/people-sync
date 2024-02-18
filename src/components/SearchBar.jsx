import { useRef } from "react";
import openai from "../Utils/openAI";
import { API_OPTIONS } from "../Utils/constant";
import { addSearchResult } from "../Utils/searchSlice";
import { useDispatch } from "react-redux";

const SearchBar = () => {
    const searchInput = useRef(null);
    const dispatch = useDispatch();

    const fetchMovie = async (movie) => {
        const responce = await fetch(
            "https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1",
            API_OPTIONS
        );
        const data = await responce.json();
        return data.results;
    };

    const handleSearch = async (event) => {
        event.preventDefault();
        const query =
            "Act a movie recommendations system amd suggest some movie for the query" +
            searchInput.current.value +
            ". Give me names of 10 movies, comma separated like the example results given ahead. Example results: Animal, Adipurush, oh My God, Jawan";

        const searchResult = await openai.chat.completions.create({
            messages: [{ role: "user", content: query }],
            model: "gpt-3.5-turbo",
        });

        const suggestMovie = searchResult.choices[0]?.message?.content.split(",");

        const promiseArray = suggestMovie.map((movie) => fetchMovie(movie));

        const movieResult = await Promise.all(promiseArray);

        console.log(movieResult);

        dispatch(addSearchResult({ name: suggestMovie, movies: movieResult, }));

        searchInput.current.value = "";
    };

    return (
        <div className="w-3/5 relative top-32 text-black m-auto">
            <form className="">
                <input
                    ref={searchInput}
                    className="outline-none rounded-md w-[87%] text-black py-1 px-4 bg-gray-300"
                    type="text"
                    placeholder="What would you like today?"
                />
                <button className="bg-purple-400 ml-4 py-1 w-[10%] rounded-md text-white font-bold hover:opacity-90" onClick={handleSearch}>
                    Search
                </button>
            </form>
        </div>
    );
};

export default SearchBar;
