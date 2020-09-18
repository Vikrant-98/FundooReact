import axios_service from '../services/axiosService';

class UserService{

    constructor(){
        this.axios_service = new axios_service();
        // let httpOption = {
        //     headers: new HttpHeaders({
        //       'Content-Type': 'application/json',
        //       Authorization: localStorage.getItem('token'),
        //     })}
    }

    login(data){
       let url = 'http://fundoonotes.incubation.bridgelabz.com/api/user/login';
       return this.axios_service.post(url,data);
    }

    register(data){
       let url = 'http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp';
        return this.axios_service.post(url,data);
    }

    addNote(data){
        let url = 'http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes';
        return this.axios_service.post(url,data);
    }

    getAllNotes(){
        let url = 'http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList';
        return this.axios_service.Get(url)
    }

    deleteNote(data){
        let url = 'http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes';
        return this.axios_service.post(url,data);
    }

    archiveNote(data){
        let url = 'http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes';
        return this.axios_service.post(url,data);
    }
    getTrashNotes() 
    {
        let url = 'http://fundoonotes.incubation.bridgelabz.com/api/notes/getTrashNotesList';
        return this.axios_service.Get(url);
    }
    updateNote(data) 
    {
        let url = 'http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes';
        return this.axios_service.post(url,data);
    }
    deleteNotePermanent(data) 
    {
        let url = 'http://fundoonotes.incubation.bridgelabz.com/api/notes/deleteForeverNotes';
        return this.axios_service.post(url,data);
    }
    getArchiveNotes() 
    {
        let url = 'http://fundoonotes.incubation.bridgelabz.com/api/notes/getArchiveNotesList';
        return this.axios_service.Get(url);
    }
    pinNote(data) 
    {
        let url = 'http://fundoonotes.incubation.bridgelabz.com/api/notes/pinUnpinNotes';
        return this.axios_service.post(url,data);
    }


}
export default new UserService();