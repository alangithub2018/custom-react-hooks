export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add todo":
      return [...initialState, action.payload];
    case "[TODO] Delete todo":
      return initialState.filter((todo) => todo.id !== action.payload);
    case "[TODO] Toggle todo":
      return initialState.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );
    default:
      return initialState;
  }
};
