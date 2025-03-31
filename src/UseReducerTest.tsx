import {useReducer} from "react";

const UseReducerTest = () => {
  const initState = {
    count: -1
  }
  type State = typeof initState
  const initFn = (state: State) => {
    console.log(state)

    return {count: Math.abs(state.count)}
  }
  const reducer = (state: State, action:{type:'add' | 'minus'}) => {
    switch (action.type) {
      case 'add':
        return {count: state.count + 1}
      case 'minus':
        return {count: state.count - 1}
      default:
        return state
    }
  }
  const [state, dispatch] = useReducer(reducer, initState, initFn)
  // reducer默认不执行 , initState是默认值   initFn执行一次 可选
  return (
    <div>
      <button onClick={() => dispatch({type: 'add'})}>+</button>
      {state.count}
      <button onClick={() => dispatch({type: 'minus'})}>-</button>
    </div>
  );
};

export default UseReducerTest;
