import {
  createVacation,
  destroyVacation,
  updateVacation
} from "models/vacation";

export function addImage(image, vacationId) {
  return dispatch =>
    updateVacation(vacationId, { images: [image] }).then(() => {
      dispatch({ type: "ADD_IMAGE", image, vacationId });
    });
}

export function removeImage(imageId, vacationId) {
  return { type: "REMOVE_IMAGE", imageId, vacationId };
}

export function addVacation(vacation) {
  return dispatch =>
    createVacation(vacation).then(vacation => {
      dispatch({ type: "ADD_VACATION", vacation });
    });
}

export function removeVacation(id) {
  return dispatch =>
    destroyVacation(id).then(() => {
      dispatch({ type: "REMOVE_VACATION", id });
    });
}
