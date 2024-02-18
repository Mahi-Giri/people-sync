import { useSelector } from "react-redux";

const SearchBar = () => {
    return (
        <div className="w-3/5 relative top-32 text-black m-auto">
            <form className="">
                <input
                    className="outline-none rounded-md w-[87%] text-black py-1 px-4 bg-gray-300"
                    type="text"
                    placeholder="What would you like today?"
                />
                <button className="bg-purple-400 ml-4 py-1 w-[10%] rounded-md text-white font-bold">Search</button>
            </form>
        </div>
    );
};

export default SearchBar;
