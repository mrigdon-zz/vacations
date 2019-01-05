export default function vacations(state = [], action) {
  switch (action.type) {
    case "ADD_IMAGE":
      return state.map(vacation => {
        const { vacationId, image } = action;
        if (vacation.id !== vacationId) return vacation;
        return {
          ...vacation,
          images: [...vacation.images, image]
        };
      });

    case "REMOVE_IMAGE":
      return state.map(vacation => {
        const { vacationId, image } = action;
        if (vacation.id !== vacationId) return vacation;
        return {
          ...vacation,
          images: vacation.images.filter(image => image.id !== action.imageId)
        };
      });

    case "ADD_VACATION":
      return [...state, action.vacation];

    case "REMOVE_VACATION":
      return state.filter(vacation => vacation.id !== action.id);

    default:
      return state;
  }
}
