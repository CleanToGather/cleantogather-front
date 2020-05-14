import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/users';
const MARKER_API_BASE_URL = 'http://localhost:8080/markers';

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL);
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId);
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }

    editUser(user) {
        return axios.patch(USER_API_BASE_URL + '/' + user.id, user);
    }

    addMarker(marker) {
        return axios.post(""+MARKER_API_BASE_URL, marker);
    }

    fetchMarkers() {
        return axios.get(MARKER_API_BASE_URL);
    }

    fetchMarkerById(markerId) {
        return axios.get(MARKER_API_BASE_URL + '/' + markerId);
    }

    deleteMarker(markerId) {
        return axios.delete(MARKER_API_BASE_URL + '/' + markerId);
    }

}

export default new ApiService();
