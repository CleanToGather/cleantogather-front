import axios from 'axios';
import AuthService from './AuthService';

const USER_API_BASE_URL = 'http://localhost:8080/users';
const EVENT_API_BASE_URL = 'http://localhost:8080/events';
const MARKER_API_BASE_URL = 'http://localhost:8080/markers';

class ApiService {

    fetchUsers() {
        return axios.get(USER_API_BASE_URL, AuthService.getAuthHeader());
    }

    fetchUserById(userId) {
        return axios.get(USER_API_BASE_URL + '/' + userId, AuthService.getAuthHeader());
    }

    fetchUserByMail(eventMail) {
        return axios.get(USER_API_BASE_URL + '/mail/' + eventMail);
    }

    fetchUserByName(name) {
        return axios.get(USER_API_BASE_URL + '/name/' + name);
    }

    deleteUser(userId) {
        return axios.delete(USER_API_BASE_URL + '/' + userId, AuthService.getAuthHeader());
    }

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user, AuthService.getAuthHeader());
    }

    editUser(user) {
        return axios.patch(USER_API_BASE_URL + '/' + user.id, user, AuthService.getAuthHeader());
    }

    fetchEvents() {
        return axios.get(EVENT_API_BASE_URL, AuthService.getAuthHeader());
    }

    fetchEventById(eventId) {
        return axios.get(EVENT_API_BASE_URL + '/' + eventId, AuthService.getAuthHeader());
    }

    addEvent(event) {
        return axios.post(""+EVENT_API_BASE_URL, event, AuthService.getAuthHeader());
    }

    deleteEvent(eventId) {
        return axios.delete(EVENT_API_BASE_URL + '/' + eventId, AuthService.getAuthHeader());
    }

    editEvent(event) {
        return axios.patch(EVENT_API_BASE_URL + '/' + event.id, event, AuthService.getAuthHeader());
    }

    fetchNumberEvents() {
        return axios.get(EVENT_API_BASE_URL + '/count', AuthService.getAuthHeader());
    }

    subscribeUser(eventId, userId) {
        return axios.post(EVENT_API_BASE_URL + '/subscribe?event_id=' + eventId +"&user_id=" + userId, AuthService.getAuthHeader());
    }

    fetchSubscribedUser(eventId) {
        return axios.get(EVENT_API_BASE_URL + '/subscribe/' + eventId, AuthService.getAuthHeader());
    }

    unsubscribeUser(eventId, userId) {
        return axios.post(EVENT_API_BASE_URL + '/unsubscribe', {event_id: eventId, user_id: userId}, AuthService.getAuthHeader())
    }

    addMarker(marker) {
        return axios.post(""+MARKER_API_BASE_URL, marker, AuthService.getAuthHeader());
    }

    fetchMarkers() {
        return axios.get(MARKER_API_BASE_URL, AuthService.getAuthHeader());
    }

    fetchMarkerById(markerId) {
        return axios.get(MARKER_API_BASE_URL + '/' + markerId, AuthService.getAuthHeader());
    }

    deleteMarker(markerId) {
        return axios.delete(MARKER_API_BASE_URL + '/' + markerId, AuthService.getAuthHeader());
    }

    fetchNumberMarkers() {
        return axios.get(MARKER_API_BASE_URL + '/count', AuthService.getAuthHeader());
    }

}

export default new ApiService();
