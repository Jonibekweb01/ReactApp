import "../Cards/cards.css";
import { Link } from "react-router-dom";

const Cards = ({ all }) => {
  return (
    <li key={all.name.official} className="w-25 shadow rounded">
      <Link to={`/country/${all.name.common}`} className="text-decoration-none text-black">
        <img src={all.flags.png} alt="" />
        <div className="text-center">
          <h3>{all.name.common}</h3>
          <p>Population: <span>all.population</span></p>
          <p>Region: <span>all.region</span></p>
          <p>Capital: <span>all.capital</span></p>
        </div>
      </Link>
    </li>
  );
};

export default Cards;
