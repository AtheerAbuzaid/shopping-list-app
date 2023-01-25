import React, {createContext, useReducer} from 'react';

export const AppReducer = (state, action) => {
    switch(action.type) {
        case 'TOGGLE_CHECKBOX': {
            action.type = "DONE";
            const index = state.shoppingList.findIndex((item => item.name === action.payload));
            const newShoppingList = [...state.shoppingList];
            newShoppingList[index].checked = !newShoppingList[index].checked;
            // if unchecking item, reset its attributes
            if (!newShoppingList[index].checked) {
                newShoppingList[index].crossedOff = false;
            }

            return {
                ...state,
                shoppingList: [...newShoppingList],
            };
        }
        case 'TOGGLE_CROSSED_OFF': {
            action.type = "DONE";
            const index = state.shoppingList.findIndex((item => item.name === action.payload));
            const newShoppingList = [...state.shoppingList];
            newShoppingList[index].crossedOff = !newShoppingList[index].crossedOff;
            // if crossing off item, make sure the item is checked as well
            newShoppingList[index].checked = true;

            return {
                ...state,
                shoppingList: [newShoppingList],
            };
        }
    default:
            return state;
    }
};

const initialState = {
    shoppingList: [
        {name: "Bananas", category: "Fruits", checked: false, crossedOff: false},
        {name: "Strawberry", category: "Fruits", checked: false, crossedOff: false},
        {name: "Carrots", category: "Vegetables", checked: false, crossedOff: false},
        {name: "Milk", category: "Dairy", checked: false, crossedOff: false},
        {name: "Cheddar cheese", category: "Dairy", checked: false, crossedOff: false},
        {name: "Salmon", category: "Meat", checked: false, crossedOff: false},
        {name: "Minced beef", category: "Meat", checked: false, crossedOff: false},
        {name: "Black pepper", category: "Spices", checked: false, crossedOff: false},
        {name: "Oregano", category: "Spices", checked: false, crossedOff: false},
        {name: "Salt", category: "Spices", checked: false, crossedOff: false},
    ]
};

export const AppContext = createContext();

export const AppProvider = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);
    return (
        <AppContext.Provider value={{shoppingList: state.shoppingList, dispatch}}>
            {props.children}
        </AppContext.Provider>
    );
};