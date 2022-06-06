import axios from 'axios';

const API_BASE_URL = "http://localhost:8080/api/v1";

class PlayerService{
    getAllPlayers(){
        return axios.get(API_BASE_URL+'/viewPlayers/all');
    }
}
export default new PlayerService();