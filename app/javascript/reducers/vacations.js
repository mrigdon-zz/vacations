export default function vacations(state = [], action) {
  switch (action.type) {
    case 'ADD_IMAGE':
      return state.map((vacation) => {
        const { vacationId, image } = action;
        if (vacation.id !== vacationId) return vacation;
        if (vacation.images.includes(image)) return vacation;
        return {
          ...vacation,
          images: [...vacation.images, image]
        };
      });
    default:
      return state;
  }
}
