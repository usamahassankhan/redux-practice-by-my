

const wishReducer = (state=[],action)=>{
    
    if(action.type==='CHANGE_NAME'){
        return{ 
            ...state,
            name:action.payload
        }
    }

return state; 
}
export default wishReducer;