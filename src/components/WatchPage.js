import { useEffect } from "react";
import {useSearchParams} from "react-router-dom";
import {useDispatch} from "react-redux";
import {closeSideBar} from "../utils/appSlice";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
    const [searchParams] = useSearchParams();
    console.log(searchParams.get("v")); // to get the value using the key

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeSideBar());
    },[]);

    return (
    <div className="px-5 py-2">
        {/**take this frame from youtube player using share button */}
       <div className="flex">
        <iframe 
                width="975" 
                height="500" 
                src={"https://www.youtube.com/embed/" + searchParams.get("v")} 
                title="YouTube video player" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen>
        </iframe>
        <div className="">
            <LiveChat />
        </div>
       </div>
        <CommentsContainer />
    </div>
    );
}

export default WatchPage;