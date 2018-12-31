export default function vacations(state = [], action) {
  switch (action.type) {
    case 'ADD_IMAGE':
      return state.map((vacation) => {
        const { vacationId, image } = action;
        if (vacation.id !== vacationId) return vacation;
        return {
          ...vacation,
          images: [...vacation.images, image]
        };
      });

    case 'ADD_VACATION':
      return [...state, action.vacation];

    default:
      return state;
  }
}
