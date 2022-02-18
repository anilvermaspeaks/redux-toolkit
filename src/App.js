import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./store/slices/counterSlice";
import Button from "@mui/material/Button";

import "./App.css";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div className="App">
      <div>{count}</div>
      <div>
        <Button onClick={() => dispatch(decrement())} variant="contained">
          -1
        </Button>
        <Button onClick={() => dispatch(increment())} variant="contained">
          +1
        </Button>
      </div>
    </div>
  );
};

export default App;
