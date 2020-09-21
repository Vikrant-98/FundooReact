import axios_service from '../services/axiosService';
import {baseURL} from './environment'

class UserService{

    constructor(){
        this.axios_service = new axios_service();
    }

    login(data){
       let url = baseURL+'user/login';
       return this.axios_service.post(url,data);
    }

    register(data){
       let url = baseURL+'user/userSignUp';
        return this.axios_service.post(url,data);
    }

    addNote(data){
        let url = baseURL+'notes/addNotes';
        return this.axios_service.post(url,data);
    }

    getAllNotes(){
        let url = baseURL+'notes/getNotesList';
        return this.axios_service.Get(url)
    }

    deleteNote(data){
        let url = baseURL+'notes/trashNotes';
        return this.axios_service.post(url,data);
    }

    archiveNote(data){
        let url = baseURL+'notes/archiveNotes';
        return this.axios_service.post(url,data);
    }
    getTrashNotes() 
    {
        let url = baseURL+'notes/getTrashNotesList';
        return this.axios_service.Get(url);
    }
    updateNote(data) 
    {
        let url = baseURL+'notes/updateNotes';
        return this.axios_service.post(url,data);
    }
    deleteNotePermanent(data) 
    {
        let url = baseURL+'notes/deleteForeverNotes';
        return this.axios_service.post(url,data);
    }
    getArchiveNotes() 
    {
        let url = baseURL+'notes/getArchiveNotesList';
        return this.axios_service.Get(url);
    }
    pinNote(data) 
    {
        let url = baseURL+'notes/pinUnpinNotes';
        return this.axios_service.post(url,data);
    }
    changeColor(data) 
    {
        let url = baseURL+'notes/changesColorNotes';
        return this.axios_service.post(url,data);
    }
    updateNote(data) 
    {
        let url = baseURL+'notes/updateNotes';
        return this.axios_service.post(url,data);
    }

}
export default new UserService();