import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "./App";

type HomeProps = {
}

const Home: React.FC<HomeProps> = ({  }) => {
    const { theme, setTheme } = useContext(ThemeContext);

    const [ count, setCount ] = useState<number>(0);

    useEffect(() => {
        console.log('mounting home');
    }, []);

    useEffect(() => {
        console.log(theme);
    }, [ theme ]);

    useEffect(() => {
        console.log(count);
    }, [ count ]);

    return (
        <div>
            <p>Critter</p>
            <button onClick={() => setTheme("dark")}>Dark Mode</button>
            <p>Clicked {count} times</p>
            <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    );
}

export default Home;
