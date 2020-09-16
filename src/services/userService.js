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
       return this.axios_service.post(url,data,false);
    }

    register(data){
       let url = 'http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp';
        return this.axios_service.post(url,data,false);
    }

    addNote(data){
        let url = 'http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes';
        return this.axios_service.post(url,data,false);
    }




}
export default new UserService();