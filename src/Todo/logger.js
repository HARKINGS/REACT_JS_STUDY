function logger(reducer) {
  return (prevState, action) => {
    console.group(action.type);

    const newState = reducer(prevState, action);
    console.log("Prev state:", prevState);
    console.log("Action:", action);
    console.log("New state:", newState);

    console.groupEnd();

    return newState;
  };
}

export default logger;
