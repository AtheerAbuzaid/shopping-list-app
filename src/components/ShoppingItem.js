import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const ShoppingItem = (props) => {
    const {dispatch} = useContext(AppContext);
    
    const handleCheckboxChange = () => {
        dispatch({
            type: 'TOGGLE_CHECKBOX',
            payload: props.name,
        });
    };

    const handleCrossOffChange = () => {
        dispatch({
            type: 'TOGGLE_CROSSED_OFF',
            payload: props.name,
        });
    };

    return(
        <tr>
            {/*checkbox*/}
            <td>
                <input type="checkbox"
                       className="item-checkbox"
                       checked={props.checked} 
                       onChange={() => handleCheckboxChange()}/>
            </td>
            {/*name*/}
            <td><button className={props.crossedOff? "item-name crossed-off" : "item-name"}
                        onClick={() => handleCrossOffChange()}>{props.name}</button></td>
            {/*quantity*/}
        </tr>
    );
};

export default ShoppingItem;