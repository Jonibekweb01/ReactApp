import { useState } from "react";
import Luna from "../header/images/Luna.svg";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const Header = () => {
  // const [themes, setThemes] = useState("light")
  const { theme, setTheme } = useContext(ThemeContext);
  const [btnTheme, setBtnTheme] = useState(false)


  return (
    <header className={theme}>
      <div className="header__inners">
        <div className="container">
          <div className="header__inner">
            <h2 className="header__title">Where in the world?</h2>
            <div className="box">
              <img
                className="box__luna"
                src={Luna}
                alt="Luna"
                width={20}
                height={20}
              />
              <button className="box__title" onClick={() => {
                setBtnTheme(!btnTheme);
                btnTheme ? setTheme("light") : setTheme("dark")
              }}>Dark Mode</button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
