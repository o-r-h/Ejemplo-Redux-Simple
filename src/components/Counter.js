import classes from './Counter.module.css';
import  {useSelector, useDispatch} from 'react-redux';
import { counterActions } from '../store/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter  =useSelector(state =>state.counter.counter);
  const showCounter = useSelector(state => state.counter.showCounter); 

  const toggleCounterHandler = () => {
    console.log('toggleCounterHandler');
    dispatch(counterActions.toggleCounter());
  }
  const incrementCounterHandler = () =>{
    dispatch(counterActions.increment());
  }
  const decrementCounterHandler = () =>{
    dispatch(counterActions.decrement());
  }
  const increaseCounterHandler = () =>{
    dispatch(counterActions.increase(5));
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
       {showCounter &&<div className={classes.value}> {counter} </div>}
      <div>
      <button onClick={incrementCounterHandler} >Increment</button>
      <button onClick={increaseCounterHandler} >Increase by 5</button>
      <button onClick={decrementCounterHandler} >Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
