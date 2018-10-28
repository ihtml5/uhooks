import React, { useState, useEffect, useReducer, useRef } from 'react';
import { todosReducer } from '../useReducer';

function useCount(initValue = 0) {
    const [count, setCount] = useState(initValue);
	useEffect(() => {
		document.title = `${count}`;
	});
	return [count, setCount];
}
function usePrevious(value) {
    const ref = useRef();
    useEffect(() => {
        ref.current = value;
    });
    return ref.current;
}
function Muso(props) {
	const { initValue } = props;
	const [todos, dispatch] = useReducer(todosReducer, []);
    const [count, setCount] = useCount(initValue);
    const prevCount = usePrevious(count);
    console.log(todos);
	return (
		<div
			onClick={() => {
                setCount(count + 1);
				dispatch({
					type: 'add',
					text: `dispatch:${count + 1}`,
				});
			}}
		>
            <div>{`prev:${prevCount}`}</div>
            <div>{count}</div>
            {todos.map((todo,index) => <div key={index}>{todo.text}</div>)}
		</div>
	);
}

export default Muso;
