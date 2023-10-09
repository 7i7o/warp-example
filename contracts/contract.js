export function handle(state, action) {
  if (action.input.function === "add") {
    state.counter = state.counter + 1;
  }
  return { state };
}
