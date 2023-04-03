import { Link } from "react-router-dom"

const SideBar = () => {
    return(
        <div className="mr-5 p-10 shadow-lg">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/demo">Demo</Link></li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>

            <ul>
                <li className="font-bold mt-3">Subscriptions</li>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>News</li>
            </ul>
            <ul>
                <li className="font-bold mt-3">Watch Later</li>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>News</li>
            </ul>
        </div>
    );
}

export default SideBar;