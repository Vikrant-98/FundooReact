
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
