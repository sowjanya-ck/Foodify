import ResCard, {withVeglabel} from "./ResCard"; 

import { resList } from "../utils/mockData";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import Footer from "./Footer";

import useOnlineStatuus from "../utils/useOnlineStatus";

const Body =()=>{
    // const [listofRestaurants,setListofRestaurant]=useState(resList);
    // now we dont need mockdata 
    const [listofRestaurants,setListofRestaurant]=useState([]);
    const [filteredRestaurant,setFileteredRestaruant]=useState([]);
    
    const[searchText,setSeachText]=useState("");
    const ResCardVeg = withVeglabel(ResCard);
    useEffect(()=>{
        // console.log("this will render after the body component renders");
        fetchData();

    },[]);
    //       whnerver a state variable gets update, react triggers a reconcilation cycle.(re-renders the componennet)

    const fetchData=async ()=>{

        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.3408807&lng=74.7421427&page_type=DESKTOP_WEB_LISTING");
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9141417&lng=74.8559568&page_type=DESKTOP_WEB_LISTING");
        const convertJson= await data.json();
        setListofRestaurant(convertJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFileteredRestaruant(convertJson?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatuus();
    const {loggedUser,setUserName} = useContext(UserContext);

    if (!onlineStatus) 
        return <h1>You're offline. Please connect to the internet.</h1>;
    
    else if(!listofRestaurants || listofRestaurants.length ===0)
        return <Shimmer/>
    
     else 
    return(
       
        <div className="body">
           
           

            <div className="flex items-center justify-center p-4">
                        <div className="flex w-full bg-white rounded-lg mx-12 shadow-lg overflow-hidden">
                        {/* Left side (Search section) */}
                        <div className="flex flex-col justify-center w-1/2 bg-red-500 p-6">
                            <h1 className="text-white text-2xl font-bold mb-2">Delicious Food, Delivered to You</h1>
                            <p className="text-white mb-4">Discover the best restaurants in your area</p>
                            <div className="flex items-center">
                            <input
                                type="text"
                                placeholder="Search restaurants..."
                                value={searchText} 
                                onChange={(e) => {
                                    const searchTextValue = e.target.value;
                                    setSeachText(searchTextValue);
                                    
                                    // Filter restaurants as you type
                                    const filteredRestaurants = listofRestaurants.filter((res) => 
                                        res.info.name.toLowerCase().includes(searchTextValue.toLowerCase())
                                    );
                                    setFileteredRestaruant(filteredRestaurants);
                                }} 
                                className="w-full px-4 py-2 text-gray-700 rounded-l-lg focus:outline-none"
                            />
                            <button className="px-4 py-2 bg-white text-red-500 rounded-r-lg">
                                <i className="fas fa-search"></i>
                            </button>
                            </div>
                        </div>
                        
                        {/* Right side (Placeholder section for Filter by Rating) */}
                            <div className="flex items-center justify-center w-1/2 bg-gray-200 p-6">
                                <select className="w-full px-4 py-2 bg-white text-gray-700 rounded focus:outline-none"
                                    onChange={(e) => {
                                    const selectedRating = parseFloat(e.target.value);
                                    const filteredRes = listofRestaurants.filter((res) => res.info.avgRating >= selectedRating);
                                    setFileteredRestaruant(filteredRes);
                                }}>
                                    <option value="0">Filter by rating</option>
                                    <option value="5">5 Stars</option>
                                    <option value="4">4 Stars & Up</option>
                                    <option value="3">3 Stars & Up</option>
                                    <option value="2">2 Stars & Up</option>
                                    <option value="1">1 Star & Up</option>
                                </select>
                            </div>
                        </div>
            </div>



            <div className="flex flex-wrap justify-center items-center m-auto">
                {filteredRestaurant.length > 0 ? (
                    filteredRestaurant.map((res) => 
                        <Link key={res.info.id} to={"/restaurants/" + res.info.id}>
                            {res.info.veg ? (
                                <ResCardVeg resData={res} />
                            ) : (
                                <ResCard resData={res} />
                            )}
                        </Link>
                    )
                ) : (
                    <div className="text-gray-500 text-center py-4">
                        No restaurants found.
                    </div>
                )}
            </div>

            <Footer/>

        </div>
    )
}
export default Body;