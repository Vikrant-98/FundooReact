import axios from 'axios';

// const axios = require(axios).default;

export default function axios_service(){

}
axios_service.prototype.post =  function(url,data,isHeaderReq=false,header){
    return axios.post(url,data,isHeaderReq && header);
}
axios_service.prototype.Get =  function(url,data,isHeaderReq=false,header){
    return axios.get(url,data,isHeaderReq && header);
}