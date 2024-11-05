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
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
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
           
            <div className="filter flex" > 
                <div className="m-4 p-4" >
                    <input type="text" className="border border-solid border-black" value={searchText} onChange={(e)=>{setSeachText(e.target.value)}} />
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={()=>{
                        const filterSearchRestaurant = listofRestaurants.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                        setFileteredRestaruant(filterSearchRestaurant);

                        }} > search</button>

                </div>
                <div className="m-4 p-4 flex items-center">
                <button className="px-4 py-2 bg-gray-100 rounded-lg" onClick={()=>{

                    const filterdRes=listofRestaurants.filter((res)=>res.info.avgRating>4);
                    setFileteredRestaruant(filterdRes);
                    
                }}>Top-rated restaurants </button>
                </div>
                <div className="m-4 p-4 flex items-center">
                <label>User name :  </label>
                <input className="border border-black" value={loggedUser} onChange = {(e) => setUserName(e.target.value) }/>
                </div>

            </div>
            <div className="flex flex-wrap justify-center items-center m-auto ">
               {
                filteredRestaurant.map((res) => 
                <Link key= {res.info.id} to={"/restaurants/"+res.info.id}>
                    {/* if the restaurant is veg then add veg label */}
                    
                    {
                        res.info.veg && res.info.veg?(
                            <ResCardVeg resData = {res} />
                        ) :
                        (
                            <ResCard resData = {res} />
                        )
                    }
                </Link>
                )
               }
            </div>
        </div>
    )
}
export default Body;