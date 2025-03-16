import { IoHeartSharp } from "react-icons/io5";
import { IoHeartOutline } from "react-icons/io5";

import styles from "./LikeButton.module.css";
import { useState } from "react";

interface LikeProps{
    onClick: () => void
}

const LikeButton = ({onClick}: LikeProps) => {

    function toggle(){
        setStatus(!status)
        onClick()
    }

    const [status, setStatus] = useState(false)
    if (status) return <IoHeartSharp className={styles.btnClick} onClick={() => toggle()}/>
    
    return <IoHeartOutline className={styles.btnNotClick} onClick={() => toggle()}/>;
};

export default LikeButton;
