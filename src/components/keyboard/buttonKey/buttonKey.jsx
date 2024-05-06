import "./buttonKey.css"
import React, {useEffect, useState} from "react"

const ButtonKey = ({ text, isActive }) => {
    const [isActiveState, setIsActiveState] = useState(isActive);

    useEffect(() => {
        setIsActiveState(isActive);
    }, [isActive]);

    useEffect(() => {
        if (isActiveState) {
            const timer = setTimeout(() => {
                setIsActiveState(false);
            }, 100);
            return () => clearTimeout(timer);
        }
    }, [isActiveState]);

    const buttonClass = isActiveState ? 'buttonKey buttonKey--active' : 'buttonKey';
    return (
        <button className={buttonClass}>
            {text}
        </button>
    );
};

export default ButtonKey
