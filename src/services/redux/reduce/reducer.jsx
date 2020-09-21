import user_service from '../../userService';


let defaultState={
    Notes:[]
}
let defaultDeleteState={
    DeleteNotes:[]
}
let defaultArchiveState={
    ArchiveNotes:[]
}
let initialState={
    Text:''
}

export const Reducer=(state=defaultState,action)=>{
    
        console.log("changeNote");
        console.log("action",action);
        switch(action.type){
            case "CHANGE_NOTE":return{
                ...state,
                Notes:action.Notes
            }
            default: return {
                Notes:state.Notes
            }
        }
}

export const archiveReducer=(state=defaultArchiveState,action)=>{
    
    console.log("changeNote");
    console.log("action",action);
    switch(action.type){
        case "CHANGE_ARCHIVE_NOTE":return{
            ...state,
            ArchiveNotes:action.ArchiveNotes
        }
        default: return {
            ArchiveNotes:state.ArchiveNotes
        }
    }
}

export const deleteReducer=(state=defaultDeleteState,action)=>{
    
    console.log("changeNote");
    console.log("action",action);
    switch(action.type){
        case "CHANGE_DELETE_NOTE":return{
            ...state,
            DeleteNotes:action.DeleteNotes
        }
        default: return {
            DeleteNotes:state.DeleteNotes
        }
    }
}

export const searchReducer=(state=initialState,action)=>{

    if(action.type==="CHANGE_SEARCH"){
        console.log("action",action);
        return{
            ...state,
            Text:action.Text
        }
    }
    return state;
}
