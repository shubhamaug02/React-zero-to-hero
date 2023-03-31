import {useDispatch} from "react-redux";
import {toggleSideBar} from "../utils/appSlice";

const Header = () => {
    const dispatch = useDispatch();
    const handleMenuClick = () => {
        dispatch(toggleSideBar());
    }
    return (
        <div className="grid grid-flow-col justify-between shadow-lg">
            <div className="flex grid-cols-1">
                <img 
                    className="h-7 my-5 px-2" 
                    alt="menu" 
                    src="https://icons.veryicon.com/png/o/miscellaneous/digital-workshop-console-general-icon/hamburger-menu-fold.png"
                    onClick={() => handleMenuClick()}
                    />
                <a href="/"><img className="h-[70px] p-2 mx-5" alt="logo" src="https://images.indianexpress.com/2017/08/youtube_logo_new-759.jpg" /></a>
            </div>
            <div className="grid-cols-10 my-5">
                <input className="w-96 rounded-l-lg border border-black-500" type="text"/>
                <button className="bg-gray-200 rounded-r-lg">Search</button>
            </div>
            <div className="grid-cols-1 my-5">
                <img className="h-10" alt="avatar" src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"/>
            </div>
        </div>
    );
}

export default Header;