import Luna from "../header/images/Luna.svg";

const Header = () => {
  return (
    <header>
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
            <span className="box__title">Dark Mode</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
