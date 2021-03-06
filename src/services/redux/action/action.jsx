import user_service from '../../userService';

export function getAllNotes(){

    return (dispatch)=>{
        return user_service.getAllNotes().then((data) =>{
        
            dispatch(changeNote(data.data.data.data));

        }).catch(error=>{
          console.log("error",error);
        })
    }
    
}
export function getTrashNotes(){

    return(dispatch)=>{
        return user_service.getTrashNotes().then((data) =>{
        
            dispatch(changeDeleteNote(data.data.data.data));

        }).catch(error=>{
          console.log("error",error);
        })
    }
    
}
export function getarchiveNotes(){

    return(dispatch)=>{
        return user_service.getArchiveNotes().then((data) =>{
        
            dispatch(changeArchiveNote(data.data.data.data));

        }).catch(error=>{
          console.log("error",error);
        })
    }
    
}

function changeNote(Notes){
    console.log("Notes",Notes)
    return{
        type:"CHANGE_NOTE",
        Notes:Notes
    }
    
}
function changeDeleteNote(DeleteNotes){
    console.log("Delete Note",DeleteNotes)
    return{
        type:"CHANGE_DELETE_NOTE",
        DeleteNotes:DeleteNotes
    }
}
function changeArchiveNote(ArchiveNotes){
    console.log("Archive Notes",ArchiveNotes)
    return{
        type:"CHANGE_ARCHIVE_NOTE",
        ArchiveNotes:ArchiveNotes
    }
}

export const updateSearch = (text) =>{

    return({
            type:'CHANGE_SEARCH',
            Text:text
          })

}