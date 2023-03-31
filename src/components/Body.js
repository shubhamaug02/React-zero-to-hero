import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import {useSelector} from "react-redux";

const Body = () => {
    // outlet can be applied when we have children present in the appConfig of that element

    const isSideBarOpen = useSelector(store => store.app.isSideBarOpen);
    return (
        <div className="flex">
           {isSideBarOpen &&  <SideBar />}
            <Outlet /> 
        </div>
    );
}

export default Body;