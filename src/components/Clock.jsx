import { useEffect, useState } from "react";

const Clock = (props) => {

const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        console.log("Komponent zamontowany");

const interval = setInterval(()=>{
    console.log("wykonuje interwał");
            setTime(new Date().toLocaleTimeString());
        }, 1000);

         return () => {
            clearInterval(interval);
            console.log("Komponent odmontowany");
        };

    }, []);

    return <p>{time}{""}
    <span className="clockControl" onClick={() => props.setShowClock(false)}>
        Wyłącz zegar
    </span>
    </p>

}

export default Clock;