import axios_service from '../services/axiosService';

class UserService{

    constructor(){
        this.axios_service = new axios_service();
    }

    login(data){
       let url = 'http://fundoonotes.incubation.bridgelabz.com/api/user/login';
       return this.axios_service.post(url,data,false);
    }

    register(data)
    {
        let url = 'http://fundoonotes.incubation.bridgelabz.com/api/user/userSignUp';
        return this.axios_service.post(url,data,false);
    }

}
export default new UserService();