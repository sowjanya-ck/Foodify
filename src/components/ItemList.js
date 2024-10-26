import { RES_URL } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    const dispatch = useDispatch();
    console.log("sowj")
    console.log(items);

    const handleItem = (e) => {
        //dispatch(will get from useDipstch hook) an action
        dispatch(addItem(e));
    }
    return(
        <div>
            <ul>
                {items.map((item)=>(
                    
                    <div key = {item.card.info.id} className="m-2 p-2  border-blue-300 border-b-2 text-left">
                       <div className="flex">
                        <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span> - ₹ {item.card.info.price ? item.card.info.price/100 :item.card.info.defaultPrice/100   }</span>
                        </div>
                        <p>{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-4 ">
                            <div className="absolute">
                                <button className="bg-white p-1 mx-1 mt-[-20] shadow-lg rounded-lg "
                                onClick={() =>handleItem(item)}>
                                    Add +</button>
                            </div>
                            <img src={RES_URL + item.card.info.imageId } className="border rounded-md"/>
                        </div>
                        </div>
                    </div>
                ))}
            </ul>

        </div>
    )
}

export default ItemList;