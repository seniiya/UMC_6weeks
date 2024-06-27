// custom hook으로 debounce 적용 
import { useEffect, useState } from "react";

export default function Debounce (value, delay) {
    const [ debounceValue, setDebounceValue ] = useState(value) 
    // value 로 받아오는 거 아닐 듯 .. 수정해야함 ! 

    useEffect(() => {
        const timer = setTimeout(() => {
            setDebounceValue(value)
        }, delay)

        return () => clearTimeout(timer)
    }, [value])

    return debounceValue
};