import { useState } from "react";
const User = ({name}) =>{
    const [count] = useState(0);
    const [count2] = useState(0)

    return (
        <div className="user_card">
            <h2>Hello I am {name}</h2>   
            {/* <h3>Location: bangalore</h3>
            <h3>count is {count}</h3>
            <h3>count2 is {count2}</h3>

            <h4>Contact: xx9342xxxx</h4> 
            <h4>Linkdin: sowjnaya-kumari/</h4> */}


         </div>
    )
}
export default User;