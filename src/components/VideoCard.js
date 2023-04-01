const VideoCard = ({snippet, statistics}) => {
    // console.log(snippet);
    // console.log(statistics);

    const {thumbnails, title, channelTitle} = snippet;
    const {viewCount} = statistics;
    return (
       <div className="p-2 m-2 w-72 shadow-lg rounded-lg">
           <img alt="thumnail" src={thumbnails?.medium?.url}/>
           <h3 className="font-bold">{title}</h3>
           <h5>{channelTitle}</h5>
           <h5>{viewCount}</h5>
       </div>
    );
}

export const AdVideoCard = ({videoInfo}) => {
    //console.log(videoInfo)
    return (
        <div className="p-1 m-1 border border-red-900">
            <VideoCard {...videoInfo}/>
        </div>
    );
}

export default VideoCard;