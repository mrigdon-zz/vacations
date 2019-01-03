export function addImage(image, vacationId) {
  return { type: 'ADD_IMAGE', image, vacationId };
}

export function addVacation(vacation) {
  return { type: 'ADD_VACATION', vacation };
}

export function removeVacation(id) {
  return { type: 'REMOVE_VACATION', id };
}
