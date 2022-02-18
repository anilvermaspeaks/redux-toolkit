import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "../../store/slices/counterSlice";
import Button from "@mui/material/Button";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      {" "}
      <div>{count}</div>
      <div>
        <Button onClick={() => dispatch(decrement())} variant="contained">
          -1
        </Button>
        <Button onClick={() => dispatch(increment())} variant="outlined">
          +1
        </Button>
      </div>
    </div>
  );
};

export default Counter;
