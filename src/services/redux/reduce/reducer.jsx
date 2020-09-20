
let defaultState={
    Notes:[]
}
// let defaultDeleteState={
//     DeleteNotes:[]
// }
// let defaultArchiveState={
//     ArchiveNotes:[]
// }

export const Reducer=(state=defaultState,action)=>{
    
        console.log("changeNote");
        console.log("action",action);
        switch(action.type){
            case "CHANGE_NOTE":return{
                ...state,
                Notes:action.Notes
            }
            case "CHANGE_DELETE_NOTE":return{
                ...state,
                Notes:action.DeleteNotes
            }
            case "CHANGE_ARCHIVE_NOTE":return{
                ...state,
                Notes:action.Notes
            }
            default: return {
                Notes:[]
            }
        }
}

// export const DeleteReducer=(state=defaultDeleteState,action)=>{
//     if(action.type==="CHANGE_NOTE"){
//         console.log("changeNote");
//         return{
//             ...state,
//             DeleteNotes:action.Notes
//         }
//     } else{
//         console.log("default Note");
//         return{
//             DeleteNotes:[]
//         }
//     }
// }
// export const ArchiveReducer=(state=defaultArchiveState,action)=>{
//     if(action.type==="CHANGE_NOTE"){
//         console.log("changeNote");
//         return{
//             ...state,
//             ArchiveNotes:action.Notes
//         }
//     } else{
//         console.log("default Note");
//         return{
//             ArchiveNotes:[]
//         }
//     }
// }
