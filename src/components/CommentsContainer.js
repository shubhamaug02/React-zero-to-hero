
// comments data structure

const commentsData = [
    {
        name: "Shubham Patel",
        text: "I will do it. I will make it happen everything I can think of",
        replies: [
          
        ]
    },
    {
        name: "Shubham Patel",
        text: "I will do it. I will make it happen everything I can think of",
        replies: [
            {
                name: "Shubham Patel",
                text: "I will do it. I will make it happen everything I can think of",
                replies: [
                    {
                        name: "Shubham Patel",
                        text: "I will do it. I will make it happen everything I can think of",
                        replies:[
                            {
                                name: "Shubham Patel",
                                text: "I will do it. I will make it happen everything I can think of",
                                replies: [
                                    {
                                        name: "Shubham Patel",
                                        text: "I will do it. I will make it happen everything I can think of",
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        name: "Shubham Patel",
                        text: "I will do it. I will make it happen everything I can think of"
                    }
                ]
            }
        ]
    },
    {
        name: "Shubham Patel",
        text: "I will do it. I will make it happen everything I can think of",
        replies: [
            {
                name: "Shubham Patel",
                text: "I will do it. I will make it happen everything I can think of"
            },
            {
                name: "Shubham Patel",
                text: "I will do it. I will make it happen everything I can think of"
            },
            {
                name: "Shubham Patel",
                text: "I will do it. I will make it happen everything I can think of"
            }
        ]
    },
    {
        name: "Shubham Patel",
        text: "I will do it. I will make it happen everything I can think of",
        replies: []
    },
    {
        name: "Shubham Patel",
        text: "I will do it. I will make it happen everything I can think of",
        replies: []
    }
]

const Comments = ({data}) => {
    const {name, text} = data;
    return(
        <div className="flex shadow-sm bg-gray-100 p-2 my-2 rounded-lg">
            <img
                className="w-12 h-12"
                alt="user"
                src="https://cdn-icons-png.flaticon.com/512/6596/6596121.png" 
            />
            <div className="px-3">
                <p className="font-bold">{name}</p>
                <p>{text}</p>
            </div>
        </div>
    );
}

const CommentsList = ({comments}) => {
    return (
        <div>
            {
                 comments?.map((comment, index) => {
                   return (
                    <div key={index}>
                        <Comments data={comment}/>
                        <div className="pl-5 ml-5 border border-l-black">
                            <CommentsList comments={comment.replies}/>
                        </div>
                    </div>
                   );
                 })
            }
        </div>
    );
}

const CommentsContainer = () => {
 
    return (
        <div className="p-2 m-5">
           <h1 className="text-2xl font-bold">Comments</h1>
           {/* <Comments data={commentsData[0]}/> */}
           <CommentsList comments={commentsData}/>
        </div>
    );
}

export default CommentsContainer;