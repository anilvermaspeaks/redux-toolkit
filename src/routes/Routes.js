import {Routes, Route} from "react-router-dom";
import Counter from "../features/counter/Counter";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Counter />} />
      <Route path="users/*" element={<div />} />
    </Routes>
  );
};

export default AppRoutes;
