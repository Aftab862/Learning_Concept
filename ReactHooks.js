/**
 * React Hooks are special functions that let you "hook into" React features.
 * These are the functions that allow you to use state and other React features without writing a class.
 * Here are some commonly used React Hooks:
 *
 * 1. useState: Allows you to add state to functional components.
 *    Example:
 *    const [count, setCount] = useState(0);
 */
import { useState, useEffect, useContext, useReducer, useRef } from 'react';

/**
 * 2. useEffect: Lets you perform side effects in functional components.
 *  - It can be used for data fetching, subscriptions, or manually changing the DOM.
 *  - It runs after the first render and after every update by default.
 *    Example:
 *    useEffect(() => {
 *      document.title = `You clicked ${count} times`;
 *    }, [count]);
 */
function ExampleUseEffect() {
  const [count, setCount] = useState(0);
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    }, [count]);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

/** 3. useContext: Allows you to use context in functional components.
 *    Example:
 *    const value = useContext(MyContext);
 */
const MyContext = React.createContext('default value');

function ExampleUseContext() {
    const value = useContext(MyContext);
    return <div>{value}</div>;
}
/** 4. useReducer: An alternative to useState for complex state logic.
 *  - The useReducer hook is a React hook that is used for managing state in functional components.
 *  - It is similar to Redux but built into React.
 *  - It takes a reducer function and an initial state, and returns the current state and a dispatch function.
 *  - It is an alternative to useState and is particularly useful when the state has multiple sub-values 
 *  - or when the next state depends on the previous one.
 *    Example:
 *    const [state, dispatch] = useReducer(reducer, initialState);
 */
function reducer(state, action) {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}

function ExampleUseReducer() {
    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            Count: {state.count}
            <button onClick={() => dispatch({ type: 'increment' })}>+</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
        </div>
    );
}
/** 5. useRef: Allows you to persist values between renders without causing re-renders.
 *    Example:
 *    const myRef = useRef(initialValue);
 *   return <div ref={myRef}></div>;
*/
function ExampleUseRef() {
    const myRef = useRef(null);
    useEffect(() => {
        myRef.current.focus();
    }, []);
    return <input ref={myRef} type="text" />;
}

/**
 * 6. useMemo: Memoizes a computed value to optimize performance.
 *  - It is used to avoid recalculating values on every render.
 *  - It only recomputes the memoized value when one of the dependencies has changed.
 *  - Useful for expensive calculations.
 *    Example:
 *    const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
 *  - first argument is a function that returns the computed value.
 *  - second argument is an array of dependencies that determine when to recompute the value.

*/

function ExampleUseMemo() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(1);
    const memoizedValue = React.useMemo(() => {
        // Simulate an expensive computation
        let result = 0;
        for (let i = 0; i < 100; i++) {
            result += a + b;
        }
        return result;
    }, [a, b]);
    return (
        <div>
            <p>Computed Value: {memoizedValue}</p>
            <button onClick={() => setA(a + 1)}>Increment A</button>
            <button onClick={() => setB(b + 1)}>Increment B</button>
        </div>
    );
}

/**
 * 7. useCallback: Returns a memoized callback function.
 * - It is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
 * - It only changes if one of the dependencies has changed.
 * - Helps to avoid recreating functions on every render.
 *    Example:
 *    const memoizedCallback = useCallback(() => { doSomething(a, b); }, [a, b]);
 */

function ExampleUseCallback() {
    const [count, setCount] = useState(0);
    const memoizedCallback = React.useCallback(() => {
        console.log(`Count is: ${count}`);
    }, [count]);
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => { setCount(count + 1); memoizedCallback(); }}>
                Increment Count
            </button>
        </div>
    );
}

/**
 * 8. useDispatch: Used with useReducer to dispatch actions to update state.
 *    Example:
 *    const dispatch = useDispatch();
 */

function ExampleUseDispatch() {
    // This is typically used in conjunction with useReducer or Redux.
    return <div>UseDispatch is typically used with useReducer or Redux.</div>;
}

export {
    ExampleUseEffect,
    ExampleUseContext,
    ExampleUseReducer,
    ExampleUseRef,
    ExampleUseMemo,
    ExampleUseCallback
};

/**
 * Difference between useMemo and useCallback:
 * - useMemo is used to memoize a computed value, while useCallback is used to memoize a function.
 * - useMemo returns the result of the function you provide, whereas useCallback returns the function itself.
*/

/**
 * summary:
 * React Hooks are powerful tools that allow you to manage state, side effects, context, and more in functional components.
 * They help keep your code clean and organized while providing the same capabilities as class components.
 */