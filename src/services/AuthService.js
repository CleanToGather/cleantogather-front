import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/users/';

class AuthService {

    login(credentials){
        return axios.post(USER_API_BASE_URL + "signin", credentials);
    }

    getUserInfo(){
        return JSON.parse(localStorage.getItem("userInfo"));
    }

    getAuthHeader() {
       return {headers: {Authorization: 'Bearer ' + this.getUserInfo().token }};
    }

}

export default new AuthService();
