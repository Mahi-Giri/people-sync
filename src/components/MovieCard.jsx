import { POSTER_IMAGE } from "../Utils/constant";

const MovieCard = ({ poster_path }) => {
    return (
        <div className="w-64 rounded-md">
            <img className="w-full h-full cursor-pointer rounded-md" src={POSTER_IMAGE + poster_path} alt="Image_Poster" />
        </div>
    );
};

export default MovieCard;