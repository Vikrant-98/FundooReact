import axios from 'axios';

export default function axios_service(){

}

axios_service.prototype.post =  function(url,data,isHeaderReq=false){
    return axios.post(url,data,{
        headers: {
          Authorization: localStorage.getItem('token')
        },
      });
}
axios_service.prototype.Get =  function(url){
    return axios.get(url,{
        headers: {
          Authorization: localStorage.getItem('token')
        },
      });
}