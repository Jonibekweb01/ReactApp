import "../Cards/cards.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useContext } from "react";

const Cards = ({ all }) => {
  const { theme } = useContext(ThemeContext);
  console.log(all);
  return (
    <li key={all.name.official} className={theme}>
      <Link to={`/country/${all.name.common}`} className="text-decoration-none text-black">
        <img src={all.flags.png} alt="" />
        <div className="text-center">
          <h3 className="titles">{all.name.common}</h3>
          <p className="titles">Population: <span>{all.population}</span></p>
          <p className="titles">Region: <span>{all.region}</span></p>
          <p className="titles">Capital: <span>{all.capital}</span></p>
        </div>
      </Link>
    </li>
  );
};

export default Cards;
