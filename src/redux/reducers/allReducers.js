import * as types from "../type/type"

const initialState = {
    users:[],
    user:{}
}
const allReducers = (state = initialState,action) => {
    switch (action.type) {

        case types.GET_DATA:
            return {
                ...state,
                users:action.payload
            }
            break;

        case types.DELETE_DATA:
            return {
                ...state
            }
            break;

        case types.GET_SINGLE_STATE:
            return {
                ...state,
                user:action.payload
            }
            break;

        case types.EDIT_UPDATE:
            return {
                ...state
            }
            break;

        case types.POST_DATA:
            return {
                ...state
            }
            break;
    
        default:
            return state
            break;
    }
}
export default allReducers;