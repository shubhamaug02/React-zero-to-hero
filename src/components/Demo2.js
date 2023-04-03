import {useState, useRef, useEffect} from "react";

const Demo2 = () => {
    const [y,setY] = useState(0);
    let x=0;
    const ref= useRef(0);

    console.log("rendering...");

    //let i; // don't use let, it will be lost between re renders. use useRef
    const i = useRef(null);
    useEffect(() => {
       i.current = setInterval(() => {
            console.log("Hello.... ", Math.random());
        },1000);


    return () => clearInterval(i.current);
    }, []);
    return(
        <div className="p-2 m-5 w-96 h-96 border border-black">
            <div>
                <button 
                    className="bg-green-200 p-2 m-4 rounded-lg"
                    onClick={() => {
                        x=x+1;
                        console.log("x = " +x);
                    }}
                >
                    Increase x
                </button>
                <span className="font-bold p-2">{x}</span>
            </div>
            <div>
                <button 
                    className="bg-green-200 p-2 m-4 rounded-lg"
                    onClick={() => {
                       setY(y+1)
                    }}
                >
                    Increase y
                </button>
                <span className="font-bold p-2">{y}</span>
            </div>
            <div>
                <button 
                    className="bg-green-200 p-2 m-4 rounded-lg"
                    onClick={() => {
                      ref.current = ref.current+1;
                      console.log("z = ", ref.current);
                    }}
                >
                    Increase z
                </button>
                <span className="font-bold p-2">{ref?.current}</span>
            </div>
            <button 
                className="p-2 m-4 bg-red-200 rounded-lg"
                onClick={() => clearInterval(i.current)}
            >
                Stop Printing
            </button>
        </div>
    );
}

export default Demo2;