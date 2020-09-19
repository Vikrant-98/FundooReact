import user_service from '../../userService';

export function getAllNotes(){

    return(dispatch)=>{
        return user_service.getAllNotes().then((data) =>{
        
            dispatch(changeNote(data.data.data.data));

        }).catch(error=>{
          console.log("error",error);
        })
    }
    
}

export function changeNote(Notes){
    console.log("Notes",Notes)
    return{
        type:"CHANGE_NOTE",
        Notes:Notes
    }
}