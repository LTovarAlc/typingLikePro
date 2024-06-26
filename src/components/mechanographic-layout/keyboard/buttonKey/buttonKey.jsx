import "./buttonKey.css"
import React, {useEffect, useState} from "react"

const ButtonKey = ({ text, isActive, isSpaceKey, onKeyPress }) => {

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
    const spaceKeyClass = isSpaceKey ? 'buttonKey--space' : '';

    const handleKeyPress = () => {
        if (onKeyPress){
            onKeyPress(text);
        }
    };

    return (
        <button className={`${buttonClass} ${spaceKeyClass}`} onClick={handleKeyPress}>
            {text}
        </button>
    );
};

export default ButtonKey
