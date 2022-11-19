import Header from "../src/components/header/Header.jsx"
import Search from "../src/components/Search/Search.jsx"
import Select from "../src/components/Select/Select.jsx"
import Cards from "../src/components/Cards/Cards.jsx"
import "../src/components/header/header.css";
import "../src/App.css";
import { useEffect, useState } from "react";

function App() {

  const [data, setData] = useState([]);

  const [value, setValue] = useState("");
  const [select, setSelect] = useState("");

  useEffect(() => {
    if (value.length) {
      fetch(`https://restcountries.com/v3.1/name/${value}`)
        .then((res) => res.json())
        .then(data => setData(data))
    }
    else if (select.length) {
      fetch(`https://restcountries.com/v3.1/region/${select}`)
        .then((res) => res.json())
        .then(data => setData(data))
    }
    else {
      fetch(`https://restcountries.com/v3.1/all`)
        .then((res) => res.json())
        .then(data => setData(data))
        .catch((err) => console.log(err))
    }
  }, [value, select])

  return (
    <>
      <Header />
      <section className="holder">
        <div className="container">
          <div className="holder__inner">
            <div className="holder__top">
              <Search setValue={setValue} />
              <Select setSelect={setSelect} />
            </div>
            <div className="holder__bottom">
              <ul className="list flex-wrap d-flex gap-5 justify-content-between list-unstyled">
                {
                  data.map((item) => (
                    <li className="w-25 shadow rounded">
                      <img src={item.flags.svg} alt="Flags" className="w-100 mb-3 rounded" />
                      <div className="px-4 pb-3">
                        <h3>{item.name.common}</h3>
                        <span className="d-block">Capital : {item?.capital?.[0]}</span>
                        <span className="d-block">Region : {item.region}</span>
                      </div>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}

export default App;
