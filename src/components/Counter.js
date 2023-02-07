import { useEffect, useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    const [buttonName, setbuttonName] = useState("Start");
    const [intrvl, setIntrvl] = useState(null);
    const handleClick = (action) => {
        if (action === "toggle") {
            if (buttonName === "Start") {
                const newInterval = setInterval(() => {
                    setCount((c) => c + 1);
                }, 1000);
                setIntrvl(newInterval);
                setbuttonName("Pause");
            } else {
                clearInterval(intrvl);
                setIntrvl(null);
                setbuttonName("Start");
            }
        } else {
            setbuttonName("Start");
            clearInterval(intrvl);
            setIntrvl(null);
            setCount(0);
        }
    };
    useEffect(() => {
        return () => {
            clearInterval(intrvl);
            setIntrvl(null);
        };
    }, []);
    return (
        <>
            <div className="container">
                <p>{count}</p>
                <button onClick={() => handleClick("toggle")}>{buttonName}</button>
                <button onClick={() => handleClick("reset")}>Reset</button>
            </div>
        </>
    );
}
