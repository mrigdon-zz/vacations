import { createVacation, destroyVacation } from 'models/vacation';

export function addImage(image, vacationId) {
  return { type: 'ADD_IMAGE', image, vacationId };
}

export function addVacation(vacation) {
  return (dispatch) =>
    createVacation(vacation).then((vacation) => {
      dispatch({ type: 'ADD_VACATION', vacation });
    });
}

export function removeVacation(id) {
  return (dispatch) =>
    destroyVacation(id).then(() => {
      dispatch({ type: 'REMOVE_VACATION', id });
    });
}
