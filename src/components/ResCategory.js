import { useState} from "react";
import ItemList from "./ItemList";
const ResCategory = ({data, showItems, setIndex}) =>{
    console.log({setIndex});
    // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        setIndex(); // call the function and then set the index to clicked accoordian
    }
    return(
        <div>
            <div className="w-6/12 m-auto bg-sky-100 my-4 shadow-lg p-4">
            <div className=" flex justify-between cursor-pointer" onClick={handleClick} >
                <span className="font-semibold text-lg"> {data.title} ({data.itemCards.length})</span>
                <span>⬇️</span>
            </div>
            <div className="">
                {showItems && <ItemList items = {data.itemCards}/>}
            </div>

            </div>
        </div>

    )
    
}
export default ResCategory;