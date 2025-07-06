import api from "./api";
import handleResponse from "../utils/handleResponse";

export interface AbsenceData {
  classroom_id: number;
  user_id: number;
  type_id: number;
}

export type AbsenceCreateData = AbsenceData;

export type AbsenceUpdateData = {
  id: number;
} & Partial<AbsenceData>;

export default {
  create(data: AbsenceCreateData) {
    return handleResponse(api.post("/absence", data));
  },

  update(id: number, data: AbsenceUpdateData) {
    return handleResponse(api.patch(`/absence/${id}`, data));
  },

  save(data: Partial<AbsenceData>) {
    return "id" in data && data.id
      ? this.update(data.id, data)
      : this.create(data as AbsenceCreateData);
  },
};
