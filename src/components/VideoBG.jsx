import { useSelector } from "react-redux";
import useTrailer from "../HOOKS/useTrailer";

const VideoBG = ({ id }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
    useTrailer(id);

    return (
        <div className="">
            <iframe
                className="h-screen w-full aspect-video"
                src={"https://www.youtube.com/embed/7u3zBVAxx_w?si=" + trailerVideo?.key + "?&autoplay=1&?&mute=1"}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    );
};

export default VideoBG;
