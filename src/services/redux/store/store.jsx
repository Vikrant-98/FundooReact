import {createStore} from 'redux';
import drawerStatus from '../reduce/reducer';

const store=createStore(drawerStatus);

export default store;