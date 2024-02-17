import { useSelector } from "react-redux";
import VideoTitle from "./VideoTitle";
import VideoBG from "./VideoBG";

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovie);
    if (!movies) return;
    const movie = movies[Math.floor(Math.random() * 21)];
    const { title, overview, id } = movie;

    return (
        <div>
            <VideoTitle title={title} overview={overview} />
            <VideoBG id={id} />
        </div>
    );
};

export default MainContainer;
