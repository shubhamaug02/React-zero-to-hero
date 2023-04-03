const ChatMessage = ({name, message}) => {

    return(
        <div className="flex items-center shadow-sm p-2">
            <img 
                className="h-10" 
                alt="user" 
                src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png"
            />
            <span className="font-bold px-2">{name}</span>
            <span>{message}</span>
        </div>
    );
}

export default ChatMessage;