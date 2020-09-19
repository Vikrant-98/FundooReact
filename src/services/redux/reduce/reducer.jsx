import { changeNote } from "../action/action";

let defaultState={
    Notes:[]
}

const mainReducer=(state=defaultState,action)=>{
    if(action.type==="CHANGE_NOTE"){
        console.log("changeNote");
        return{
            ...state,
            Notes:action.Notes
        }
    } else{
        console.log("default Note");
        return{
            Notes:[]
        }
    }
}

export default mainReducer;