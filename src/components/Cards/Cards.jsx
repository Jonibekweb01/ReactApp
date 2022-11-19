import Amerika from "../Cards/Images/Amerika.png";
import "../Cards/cards.css";

const Cards = ({ img, name, region, capital, population }) => {
  return (
    <li className="list__item">
      <img src={img} alt="Amreika picture" width={267} height={160} />
      <div className="list__box">
        <h3 className="list__item__title">{name}</h3>
        <span className="list__span">
          <strong>Population:</strong> {population}
        </span>
        <span className="list__span">
          <strong>Region:</strong> {region}
        </span>
        <span className="list__span">
          <strong>Capital:</strong> {capital}
        </span>
      </div>
    </li>
  );
};

export default Cards;
