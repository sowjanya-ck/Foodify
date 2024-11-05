import { RES_URL } from "../utils/constants";
import { useContext, useState } from "react";
import UserContext from "../utils/UserContext";
import '@fortawesome/fontawesome-free/css/all.min.css';

const ResCard =(props)=>{
   const {resData}=props;
   const {name,cuisines,avgRating,costForTwo}=resData?.info;
   const {loggedUser} = useContext(UserContext);

   const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleExpand = () => {
        setIsExpanded(!isExpanded);
    };

   
    return (
        <div 
            className="m-4 w-[220px] h-[350px] bg-gray-100 rounded-lg hover:bg-gray-200 shadow-lg flex flex-col items-center"
        >
            <img
                className="rounded-lg w-full h-[150px] object-cover"
                alt="res-logo"
                src={RES_URL + resData.info.cloudinaryImageId}
            />
    
            {/* Restaurant name with ellipsis and full name on hover */}
            <h3 
                className="font-bold py-2 text-lg text-center w-full h-[30px] overflow-hidden" 
                style={{ whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden' }}
                title={name} // Shows full name on hover
            >
                {name}
            </h3>
    
            
            <div 
                className="flex items-center justify-center font-bold rounded-full px-3 py-1 mt-2"
            >
                <span className={`${avgRating >= 4 ? 'text-green-500' : avgRating >= 3 ? 'text-yellow-500' : 'text-red-500'}`}>
                    {avgRating}
                </span>
                <span className={`mr-1 ${avgRating >= 4 ? 'text-green-500' : avgRating >= 3 ? 'text-yellow-500' : 'text-red-500'}`}>
                    <i className="fa-solid fa-star text-sm ml-2"></i>
                </span>
            </div>


            <h4 className="text-center text-gray-700">{costForTwo}</h4>
            
            {/* Cuisine list  */}

            <div 
                className="text-center text-gray-600 w-full h-[80] overflow-y-auto cuisine-scrollbar"

                style={{ whiteSpace: 'normal' }} // Wraps text within the section
            >
                {cuisines.join(", ")}
            </div>

        </div>
    );
    
    


};

export const withVeglabel = (ResCard) =>{
   return (props) => {
    return(
        <div className="">
            <label className="absolute mr-20 p-1 rounded-xl bg-lime-400">Veg</label>
            <ResCard {...props} />            
        </div>
    )
};
};
// destrucring the props, this will give the same result as above
// const ResCard =({resName,rate,time,cuisine})=>{
    
//     return (
//         <div className="res-card" style={{backgroundColor:"#FFFDEF"}}>
            
//             <img className="reslogo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf"/>
//             <h3>{resName}</h3>
//             <h4> {cuisine}</h4>
//             <h4>{rate}</h4>
//             <h4>{time}</h4>
//         </div>
//     )

// }


// const Body =()=>{
//     return(
//         <div className="body">
//             <div className="search"> Search </div>
//             <div className="res-container">
//                 <ResCard resName="McDonald's" cuisine="burgers,cafe" rate="4.3" time="20min"/>
//                 <ResCard resName="Meghana foods" cuisine="Biriyani,NorthIndian" rate="4.3" time="20min"/>
//                 <ResCard resName="KFC" cuisine="burger , Fast food" rate="4.3" time="20min"/>
//                 <ResCard resName="Nandana palace" cuisine="Biriyani,SouthIndian" rate="4.4" time="50min"/>
//                 <ResCard resName="cafe amudhan" cuisine="Snacks,NorthIndian" rate="4.1" time="10min"/>
//                 <ResCard resName="NH1 bowls" cuisine="Highway to NorthIndian" rate="4.5" time="20min"/>
//                 <ResCard resName="Dominos" cuisine="Pizza,desserts" rate="4.3" time="35min"/>
//                 <ResCard resName="Pizza hut" cuisine="pizza,beverages, desserts" rate="3.9" time="10min"/>
//                 <ResCard resName="Nic icecreams" cuisine="ice creams,desserts" rate="4.1" time="40min"/>

                
//             </div>
//         </div>
//     )
// }

export default ResCard;