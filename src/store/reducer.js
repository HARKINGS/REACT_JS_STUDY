import { constants } from ".";

export const initialState = {
  todos: [],
  todoInput: "",
};

function reducer(state, action) {
  switch (action.type) {
    case constants.SET_TODO:
      return { ...state, todoInput: action.payload };
    case constants.ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    default:
      console.log(`Action ${action} Invalid`);
  }
}

export default reducer;
