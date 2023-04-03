import { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import {useDispatch} from "react-redux";
import {addMessage} from "../utils/chatSlice";
import {useSelector} from "react-redux";
import { generateRandomName,generateRandomString } from "../utils/helper";

const LiveChat = () => {

    const [liveMessage, setLiveMessage] = useState("");
    const dispatch = useDispatch();
    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {

        const i = setInterval(() => {
            //API Polling

            console.log("API Polling");
            dispatch(addMessage(
                {
                    name: generateRandomName(),
                    message: generateRandomString(25) + " 🚀"
                }
            ));
        },2000);


        return () => clearInterval(i);
    },[]);

    return(
       <>
         <div className="p-2 ml-2 w-[27rem] h-[500px] border border-black bg-slate-100 rounded-lg overflow-y-scroll">
            {chatMessages.map((m,i) => <ChatMessage key={i} {...m}/>)}
        </div>

        <form 
            className="p-2 m-2 border border-black"
            onSubmit={(e) => {
                e.preventDefault();
                console.log("On form submit ", liveMessage);
                dispatch(addMessage(
                    {
                        name: "Shubham Patel",
                        message: liveMessage
                    }
                ));

                setLiveMessage("");
            }}
        >
          <input 
            className="px-2 w-80"
            type="text"
            value={liveMessage}
            onChange = {(e) => setLiveMessage(e.target.value)}
           />
           <button className="mx-2 px-2 bg-green-100 rounded-lg">Send</button>
        </form>
       </>
    );
}

export default LiveChat;