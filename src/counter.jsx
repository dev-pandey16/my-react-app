import { useSelector , useDispatch } from "react-redux";
import { increment , decrement , reset , incerementByAction } from "./Redux/features/slices/counterSlice";
import { useState } from "react";

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch(); 


  const [inputValue, setInputValue] = useState("");

  return (
    <div className="text-center space-y-4 mt-10">
      <h1 className="text-3xl font-bold">Counter: {count}</h1>
      <div className="flex justify-center gap-4">
        <button onClick={() => dispatch(increment())} className="bg-black text-black px-4 py-2 rounded">+</button>
        <button onClick={() => dispatch(decrement())} className="bg-red-500 text-black px-4 py-2 rounded">-</button>
        <button onClick={() => dispatch(reset())} className="bg-gray-500 text-black px-4 py-2 rounded">Reset</button>
        <input
          type="number"
          placeholder="Enter Value"
          className="text-black px-4 py-2 rounded"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button
          onClick={() => dispatch(incerementByAction(Number(inputValue)))}
          className="bg-gray-500 text-black px-4 py-2 rounded"
        >
          incrementByAction
        </button>
      </div>
    </div>
  )
}


export default Counter;
