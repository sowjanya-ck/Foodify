import { useState , useEffect, useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header=()=>{
    const [btnName,setBtnName]= useState("Login");
    const onlineCheck = useOnlineStatus();
    const {loggedUser} = useContext(UserContext);
    console.log({loggedUser})
    // console.log("hereder rendered");
    //if no dependedncy array then useEffect is called on every rendering.
    //if empty dependecy array present, usefecct is called on initial render(just once);
    //if we put something inside the dependcy array then , useffect is called if the dependcy array changes.
    
        // subscribing to store using the selector
    const cartItems = useSelector((store) => store.cart.items);
    console.log(cartItems);

    useEffect(()=>{
        console.log("userEffect called");
    })

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg mb-5 sm:bg-yellow-100 lg:bg-green-100">
            <div className="logo-items">
              
                <img className="w-56" src= {LOGO_URL}/>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4ddd">
                    <li className="px-4">Online status: {onlineCheck ?  "🟢" : "🔴"}</li>
                    <li className="px-4"><Link to ="/">Home</Link></li>
                    {/* its not good way to use anchor tag, because its refreshes the whole page. */}
                    <li className="px-4">< a href="/about"> About us </a></li> 
                    <li className="px-4"><Link to="/contact-us">Contact Us</Link></li>
                    <li className="px-4"><Link to="/cart"> Cart({cartItems.length})</Link> </li> 
                    <li className="px-4"><a href="/Grocery">Grocery</a></li>
                    <button onClick={()=>{ btnName ==="Login" ?setBtnName("Logout") : setBtnName("Login");}}>{btnName}</button>
                    <li className="px-4" >{loggedUser}</li>
                </ul>

            </div>
        </div>
    )
}
export default Header;