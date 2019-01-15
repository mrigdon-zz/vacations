import { destroy, post, put } from "lib/ajax";
import vacationFormData from "lib/vacationFormData";

export function destroyVacation(id) {
  return destroy(`/vacations/${id}`);
}

export function createVacation(vacation) {
  return post("/vacations", vacationFormData(vacation));
}

export function updateVacation(id, data) {
  return put(`/vacations/${id}`, vacationFormData(data));
}

export function destroyImage(vacationId, imageId) {
  return destroy(`/vacations/${vacationId}/images/${imageId}`);
}

export function uploadImage(vacationId, file) {
  const formData = new FormData();
  formData.append("file", file);
  return post(`/vacations/${vacationId}/images`, formData);
}
