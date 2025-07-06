import api from './api';
import handleResponse from '../utils/handleResponse';

export default {
    getByClassId(id) {
        return handleResponse(api.get(`/classRoom/getClassId/${id}`));
    },
    getAbsencesByClassRoomId(id) {
        return handleResponse(api.get(`/classRoom/getStudentsAbsenceByClassId/${id}`));
    }
};