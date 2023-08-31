import { POST_LOADING,POST_SUCCESS, POST_ERROR } from "../actions/actionType";

const initialState ={
    loading : false,
    error: false,
    data: []
}

const postReducer = (state=initialState, action)=>{

    switch(action.type){
        case POST_LOADING :
        return{
            ...state,
            loading: true
        }
        case POST_SUCCESS :
            return{
                ...state,
                loading :false,
                data : action.payload
            }
         case POST_ERROR:
            return{
                ...state,
                    loading: false,
                    error : action.payload
                }
        default :
        return state
    }
}

export default postReducer