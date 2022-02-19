import MenuItem from "@mui/material/MenuItem";
import {NavLink} from "react-router-dom";
import Typography from "@mui/material/Typography";
import style from "./Header.module.css";

const AppMenuItem = ({route, color}) => {
  return (
    <MenuItem>
      {!route.href && (
        <NavLink
          className={(navData) => (navData.isActive ? style.active : "")}
          to={route.route}
        >
          <Typography color={color}>{route.page}</Typography>
        </NavLink>
      )}
      {route.href && (
        <a target="_blank" rel="noreferrer" href={route.route}>
          <Typography color={color}>{route.page} </Typography>
        </a>
      )}
    </MenuItem>
  );
};

export default AppMenuItem;
