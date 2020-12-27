import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const initialState = [];

// export default function(state = initialState, action) {
//     const { type, payload } = action;
//     switch(type) {
//         case SET_ALERT:
//             // add a new alert to array 
//             return [...state, payload];
//         case REMOVE_ALERT:
//             // remove a spesific alert by its id
//             return state.filter(alert => alert.id !== payload);
//         default:
//             return state;
//     }
// }


 const alert = (state = initialState, action) => {
    const { type, payload } = action;
    switch(type) {
        case SET_ALERT:
            // add a new alert to array 
            return [...state, payload];
        case REMOVE_ALERT:
            // remove a spesific alert by its id
            return state.filter(alert => alert.id !== payload);
        default:
            return state;
    }

}

export default alert


