import { useState } from 'react';

export function todosReducer(state, action) {
	switch (action.type) {
		case 'add':
			return [
				...state,
				{
					text: action.text,
					completed: false
				}
			];
		default:
			return state;
	}
}

export default function useReducer(reducer, initialState = [{
  text: 'useState',
}]) {
  const [state, setState] = useState(initialState);
  function dispatch(action) {
    const nextState = reducer(state, action);
    setState(nextState);
  }
  return [state, dispatch];
}