import ResCard, {withVeglabel} from "./ResCard"; 

import { resList } from "../utils/mockData";
import { useState, useEffect,useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";

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
           
           <div className="filter flex flex-wrap justify-between p-1 bg-gray-50 rounded-lg shadow-md">
                <div className="search-container m-4 flex flex-col md:flex-row items-center">
                <input 
                    type="text" 
                    className="border border-gray-300 p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition" 
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
                />
                    <button 
                        className="px-1 py-1 bg-green-500 text-white m-2 rounded-lg hover:bg-green-600 transition" 
                        onClick={() => {
                            const filterSearchRestaurant = listofRestaurants.filter((res) => 
                                res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFileteredRestaruant(filterSearchRestaurant);
                        }} 
                    >
                        Search
                    </button>
                </div>

                <div className="top-rated-container m-4 flex items-center">
                        <select 
                            className="px-2 py-1 bg-gray-300 text-gray-800 rounded-lg hover:bg-gray-400 transition" 
                            onChange={(e) => {
                                const selectedRating = parseFloat(e.target.value);
                                const filteredRes = listofRestaurants.filter((res) => res.info.avgRating >= selectedRating);
                                setFileteredRestaruant(filteredRes);
                            }}
                        >
                            <option value="">Filter by Rating</option>
                            <option value="3">Rating 3+</option>
                            <option value="4">Rating 4+</option>
                            <option value="4.5">Rating 4.5+</option>
                            <option value="5">Rating 5+</option>
                        </select>
                </div>


                <div className="user-name-container m-4 flex items-center">
                    <label className="mr-2 font-medium">User Name:</label>
                    <input 
                        className="border border-gray-300 p-1 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" 
                        value={loggedUser} 
                        onChange={(e) => setUserName(e.target.value)} 
                    />
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

        </div>
    )
}
export default Body;