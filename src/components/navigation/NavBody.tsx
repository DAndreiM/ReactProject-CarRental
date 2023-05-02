import { NavLink } from "react-router-dom";

const NavBody: React.FC<{ active: string }> = ({ active }) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? active : undefined)}
            to={"/"}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? active : undefined)}
            to={"/about"}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? active : undefined)}
            to={"/cars"}
          >
            Cars
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? active : undefined)}
            to={"/blog"}
          >
            Blog
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) => (isActive ? active : undefined)}
            to={"/contact"}
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBody;
