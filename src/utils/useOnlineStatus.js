import { useEffect, useState } from "react";

const useOnlineStatus = () =>{

    const [onlineStatusCheck,setOnlineStatusCheck] = useState(true);
    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatusCheck(false);

        });
        window.addEventListener("online",()=>{
            setOnlineStatusCheck(true);

        });

    },[]);
    return onlineStatusCheck;

}

export default useOnlineStatus;