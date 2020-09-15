import {status} from '../action/declaration/type';

const initialState={
    open:false
}

const drawerStatus=(state=initialState, action)=>{

    switch(action.type){
        case status:return{
            ...state,
            open:!state.open
        }
        default:return state;
    }
}

export default drawerStatus;