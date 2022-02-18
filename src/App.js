import {ThemeProvider} from "@mui/material/styles";
import theme from "./style/theme";
import "./App.css";

import Header from "./common/components/header/Header";
import AppRoutes from "./routes/Routes";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <AppRoutes />
      </div>
    </ThemeProvider>
  );
};

export default App;
