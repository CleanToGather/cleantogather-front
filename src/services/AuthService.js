import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/signin';

class AuthService {

    login(credentials){
        return axios.post(USER_API_BASE_URL + "?name=" + credentials.username + "&password=" + credentials.password);
    }

    getUserInfo(){
        return JSON.parse(localStorage.getItem("userInfo"));
    }

    getAuthHeader() {
       return {headers: {Authorization: 'Bearer ' + this.getUserInfo() }};
    }

}

export default new AuthService();
