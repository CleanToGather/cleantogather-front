import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8080/users';
const EVENT_API_BASE_URL = 'http://localhost:8080/events';

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


    fetchEvents() {
        return axios.get(EVENT_API_BASE_URL);
    }

    fetchEventById(eventId) {
        return axios.get(EVENT_API_BASE_URL + '/' + eventId);
    }

    addEvent(event) {
        return axios.post(""+EVENT_API_BASE_URL, event);
    }

    deleteEvent(eventId) {
        return axios.delete(EVENT_API_BASE_URL + '/' + eventId);
    }

    editEvent(event) {
        return axios.patch(EVENT_API_BASE_URL + '/' + event.id, event);
    }

    subscribeUser(eventId, userId) {
        return axios.post(EVENT_API_BASE_URL + '/subscribe', {event_id: eventId, user_id: userId});
    }

    fetchSubscribedUser(eventId) {
        return axios.get(EVENT_API_BASE_URL + '/subscribe/' + eventId);
    }

    unsubscribeUser(eventId, userId) {
        return axios.post(EVENT_API_BASE_URL + '/unsubscribe', {event_id: eventId, user_id: userId})
    }

}

export default new ApiService();
