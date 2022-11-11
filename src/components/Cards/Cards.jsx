import Amerika from "../Cards/Images/Amerika.png";
import "../Cards/cards.css";

const Cards = () => {
  return (
      <li className="list__item">
        <img src={Amerika} alt="Amreika picture" width={267} height={160} />
        <div className="list__box">
          <h3 className="list__item__title">Germany</h3>
          <span className="list__span">
            <strong>Population:</strong> 81,770,900
          </span>
          <span className="list__span">
            <strong>Region:</strong> Europe
          </span>
          <span className="list__span">
            <strong>Capital:</strong> Berlin
          </span>
        </div>
      </li>
  );
};

export default Cards;
