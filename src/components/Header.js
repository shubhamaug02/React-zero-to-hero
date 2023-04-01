import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {toggleSideBar} from "../utils/appSlice";
import {YOUTUBE_SEARCH_API} from "../utils/constants";
import { cacheResults } from "../utils/searchSlice";
import store from "../utils/store";

const Header = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestionsList, setSuggestionsList] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    const dispatch = useDispatch();


    const searchSuggestions = useSelector(store => store.search);

    const handleMenuClick = () => {
        dispatch(toggleSideBar());
    }

    //console.log(searchQuery);

    useEffect(() => {
        //API Call


        // make an api call after every key press
        //but if the difference between 2 API calls(or key stroke) is <200ms
        //then decline the API call

       const timer = setTimeout(() => {
       
            if(searchSuggestions[searchQuery]){
                setSuggestionsList(searchSuggestions[searchQuery]);
            } 
            else{
                getSearchSuggestions();
            }
       
       
        },200);
       
       return () => {
        clearTimeout(timer);
       };

    },[searchQuery]);

    /**
     * 
     * key -i
     *  - render the component
     *  - useEffect();
     *  - start timer => make api call after 200 ms
     * 
     * key -ip
     *  - destroy the component(useEffect return method)
     *  - re-render the component
     *  - useEffect();
     *  - start timer => make an api call after 200ms
     * 
     * 
     * setTimeout(() => apicall, 200) - make an API call after 200ms 
     */

    const getSearchSuggestions = async() => {
        const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
        const json = await data.json();
        setSuggestionsList(json[1]);
        dispatch(cacheResults({
            [searchQuery]: json[1]
            // we need to cache in the key values, cache all keys which we search and its corresponding values
            //"iphone": "iphone pro"
        }));
        console.log("API call - " + searchQuery);
    };

    return (
        <div className="grid grid-flow-col justify-between shadow-lg">
            <div className="flex col-span-1">
                <img 
                    className="h-7 my-5 px-2" 
                    alt="menu" 
                    src="https://icons.veryicon.com/png/o/miscellaneous/digital-workshop-console-general-icon/hamburger-menu-fold.png"
                    onClick={() => handleMenuClick()}
                    />
                <a href="/"><img className="h-[70px] p-2 mx-5" alt="logo" src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg" /></a>
            </div>
            <div className="col-span-10 my-5">
                <input 
                    className="w-1/2 border border-gray-400 rounded-l-full p-2" 
                    type="text"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    onFocus={() =>setShowSuggestions(true)}
                    onBlur={() => setShowSuggestions(false)}
                />
                <button className="border border-gray-400 px-5 py-2 rounded-r-full bg-gray-100">{"🔍"}</button>
                {showSuggestions &&
                    <div className="fixed bg-white w-[32.5rem] px-5 py-2 rounded-lg sha">
                        <ul>
                            {suggestionsList.map(s => <li key={s} className="px-2 py-3 shadow-sm hover:bg-gray-100">🔍 {s}</li>)}
                        </ul>
                    </div>
                }
            </div>
            <div className="col-span-1 my-5">
                <img className="h-10" alt="avatar" src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"/>
            </div>
        </div>
    );
}

export default Header;