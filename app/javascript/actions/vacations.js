import { destroyVacation } from 'models/vacation';

export function addImage(image, vacationId) {
  return { type: 'ADD_IMAGE', image, vacationId };
}

export function addVacation(vacation) {
  return { type: 'ADD_VACATION', vacation };
}

export function removeVacation(id) {
  return (dispatch) =>
    destroyVacation(id).then(() => {
      dispatch({ type: 'REMOVE_VACATION', id });
    });
}
