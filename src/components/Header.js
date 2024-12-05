import { useState , useEffect, useContext} from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import '@fortawesome/fontawesome-free/css/all.min.css';


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
            <div className="flex justify-between items-center bg-white shadow-lg mb-5 sticky top-0 z-10 px-5">
            <div className="flex items-center space-x-6">
                {/* Logo Section */}
                <div className="flex items-center space-x-2">
                    <img className="w-[50px] h-[50px] mr-2" src={LOGO_URL} alt="Logo" />
                    <span className="text-lg font-bold text-red-500">FoodApp</span>
                </div>
        
              {/* Navigation Links */}
                <ul className="flex space-x-6 text-gray-600 font-medium">
                  {/* <li className="px-4">Online status: {onlineCheck ? "🟢" : "🔴"}</li> */}
                  <li><Link to="/" className="hover:text-red-500">Home</Link></li>
                  <li><a href="/about" className="hover:text-red-500">About Us</a></li>
                  {/* <li><Link to="/contact-us" className="hover:text-red-500">Contact Us</Link></li> */}
                  {/* <li className="px-4"><a href="/Grocery">Grocery</a></li> */}
                </ul>
            </div>
    
              {/* Cart and Profile Icons */}
              <div className="flex items-center space-x-4">
              <Link to="/cart" className="relative flex items-center">
                <i className="fa-solid fa-cart-shopping  text-gray-600 hover:text-red-500"></i>
                {cartItems.length > 0 && (
                <span className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 bg-red-500 text-white rounded-full text-xs px-1.5 py-0.5">
                    {cartItems.length}
                </span>
                )}
              </Link>
                <Link to="/login">
                  <svg
                    className="w-6 h-6 text-gray-600 hover:text-red-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* SVG for user profile icon */}
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                  </svg>
                </Link>
                <div className="text-gray-600 px-4">{loggedUser}</div>

                {/* <button onClick={()=>{ btnName ==="Login" ? setBtnName("Logout") : setBtnName("Login"); }}>{btnName}</button> */}
              </div>
            </div>
    )
}
export default Header;


