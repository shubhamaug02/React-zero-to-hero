const VideoCard = ({snippet, statistics}) => {
    // console.log(snippet);
    // console.log(statistics);
    return (
       <div className="p-2 m-2 w-72 shadow-lg rounded-lg">
           <img alt="thumnail" src={snippet.thumbnails.medium.url}/>
           <h3 className="font-bold">{snippet.title}</h3>
           <h5>{snippet.channelTitle}</h5>
           <h5>{statistics.viewCount}</h5>
       </div>
    );
}

export default VideoCard;