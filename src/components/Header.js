import { FaSun, FaMoon } from "react-icons/fa";

const Header = ({ isActive, setIsActive }) => {
  const themeHandler = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <h1 className="brand">todo</h1>
      <span onClick={themeHandler}>
        {isActive ? <FaSun className="icon" /> : <FaMoon className="icon" />}
      </span>
    </header>
  );
};

export default Header;
