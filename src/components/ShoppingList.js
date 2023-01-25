import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import ShoppingItem from "./ShoppingItem";

const ShoppingList = () => {
    const {shoppingList} = useContext(AppContext);
    return (
        <table>
            <thead>
                <tr>Shopping List</tr>
            </thead>
            <tbody>
                {shoppingList.map((shoppingItem) => (
                    <ShoppingItem name={shoppingItem.name} 
                                  checked={shoppingItem.checked} 
                                  crossedOff={shoppingItem.crossedOff}/>
                ))}
            </tbody>
        </table>
    );
};

export default ShoppingList;