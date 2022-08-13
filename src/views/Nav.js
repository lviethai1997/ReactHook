import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink to="/" activeClassName="active">
        home
      </NavLink>
      <NavLink to="/todo" activeClassName="active">
        todo
      </NavLink>
      <NavLink to="/covid" activeClassName="active">
        covid
      </NavLink>
      <NavLink to="/countdown" activeClassName="active">
        countdown
      </NavLink>
    </div>
  );
};

export default Nav;
