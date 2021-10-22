import { useState } from 'react';

export const useCounter = (initialState = 10) => {
    const [Counter, setcounter] = useState(initialState);
    const Increment =()=>{
        setcounter(Counter + 1);
    }
    const Decrement =()=>{
        setcounter(Counter - 1);
    }
    const Reset =()=>{
        setcounter(initialState);
    }
    return {
        Counter,
        Increment,
        Decrement,
        Reset
    }
};
