import api from './api';
import handleResponse from '../utils/handleResponse';

export default {
    getAll() {
        return handleResponse(api.get('/courses'));
    },

    getById(id) {
        return handleResponse(api.get(`/courses/${id}`));
    },

    create(data) {
        return handleResponse(api.post('/courses', data));
    },

    update(id, data) {
        return handleResponse(api.patch(`/courses/${id}`, data));
    },

    delete(id) {
        return handleResponse(api.delete(`/courses/${id}`));
    },

    save(data) {
        return ('id' in data && data.id)
            ? this.update(data.id, data)
            : this.create(data);
    }
};