const VideoTitle = ({ title, overview }) => {
    return (
        <div className="h-full w-full aspect-video absolute pt-[20%] text-white px-12 bg-gradient-to-r from-black z-0">
            <h1 className="text-3xl font-bold">{title}</h1>
            <p className="w-1/3 mt-4 text-gray-300">{overview}</p>
            <div className="flex gap-4 mt-12">
                <button className="bg-white px-4 py-1 rounded-md text-black font-bold hover:bg-opacity-55">Play</button>
                <button className="bg-gray-500 px-4 py-1 rounded-md text-white font-bold hover:bg-opacity-45">More Info</button>
            </div>
        </div>
    );
};

export default VideoTitle;
