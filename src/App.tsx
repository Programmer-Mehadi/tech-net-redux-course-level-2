import { useSelector, useDispatch } from "react-redux";
import { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/fearures/counter/counterSlice";

function App() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div className="mt-8">
      <div className="flex gap-4 items-center justify-center">
        <button
          className="w-fit border-2 border-red-700 py-2 px-5 rounded-full cursor-pointer"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <div className="w-fit">{count}</div>
        <button
          className="w-fit border-2 border-green-700 py-2 px-5 rounded-full cursor-pointer"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          className="w-fit border-2 border-gray-700 py-2 px-5 rounded-full cursor-pointer"
          onClick={() => dispatch(incrementByAmount(5))}
        >
          Increment By Amount
        </button>
      </div>
    </div>
  );
}

export default App;
