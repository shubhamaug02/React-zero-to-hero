import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {YOUTUBE_API_URL} from "../utils/constants";
import ButtonList from "./ButtonList";
import VideoCard, {AdVideoCard} from "./VideoCard";

const VideoContainer = () => {

    const [videos,setVideos] = useState([]);

    const fetchVideos = async () => {
        const data = await fetch(YOUTUBE_API_URL);
        const json = await data.json();
        //console.log(json);
        setVideos(json.items);
    }
    
    useEffect(() => {
        fetchVideos();
    },[]);

    return(    
     <div>
        <ButtonList />
        <div className="flex flex-wrap">
            {videos[0] && <AdVideoCard videoInfo={videos[0]}/>}
            {videos.map(video => (
            <Link to={"/watch?v=" + video.id} key={video.id}>
                <VideoCard {...video} />
            </Link>
            ))}
        </div>
        {/* {videos[0] && <VideoCard {...videos[0]}/>} */}
    </div>
    );
}

export default VideoContainer;