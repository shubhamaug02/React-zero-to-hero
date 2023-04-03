import {useMemo, useState} from "react";
import {findPrime} from "../utils/helper";

const Demo = () => {
    const [x, setX] = useState(0);
    const [darkTheme, setDarkTheme] = useState(false);


    const primeValueOfN = useMemo(() => findPrime(x),[x]); // cached for findprime except when x changes
    // expensive
    // const primeValueOfN = () => {
    //     console.log("calculating the prime of x ", x);
    //     findPrime(x);
    // };

    return(
        <div className={"p-2 m-5 w-96 h-96 border border-black " + (darkTheme && "bg-black text-white")}>
            <button 
                className="p-2 m-10 rounded-lg bg-green-200 "
                onClick={() => setDarkTheme(!darkTheme)}
            >
             Toggle
            </button>
            <h1 className="mx-5">Type the number in input </h1>
            <input
                className="pl-2 m-5 border border-black"
                type="number" 
                value={x}
                onChange={e => setX(e.target.value)}
            />
            <h1 className=" mx-5 font-bold">NthPrime - {primeValueOfN}</h1>
        </div>
    );
}

export default Demo;