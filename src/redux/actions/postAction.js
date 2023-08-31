import { POST_LOADING,POST_SUCCESS,POST_ERROR } from "./actionType";

export const postLoading = ()=>{
    return{
        type:POST_LOADING,
        
    }
}
export const postSuccess = (data)=>{
    return{
        type:POST_SUCCESS,
        payload: data
    }
}
export const postError = (error)=>{
    return{
        type:POST_ERROR,
        payload: error
    }
}
