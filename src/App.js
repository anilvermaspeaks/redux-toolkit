import {useSelector, useDispatch} from "react-redux";
import {increment, decrement} from "./store/slices/counterSlice";
import Button from "@mui/material/Button";
import {ThemeProvider} from "@mui/material/styles";
import theme from "./style/theme";
import "./App.css";

import Header from "./common/components/header/Header";

const App = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
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
    </ThemeProvider>
  );
};

export default App;
