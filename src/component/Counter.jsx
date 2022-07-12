import React, { useReducer } from "react";

function reducer(state, actions) {
  switch (actions.type) {
    case "INCREMENT":
      return { value: state.value + 1 };
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  return (
    <div>
      <p>
        현재 카운터 값은 <b>{state.value}</b>
      </p>
      <button type="button" onClick={() => dispatch({ type: "INCREMENT" })}>
        +1
      </button>
			<button type="button" onClick={() => dispatch({ type: "DECREMENT" })}>
				+1
			</button>
    </div>
  );
}

export default Counter;
