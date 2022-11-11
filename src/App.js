import Header from "../src/components/header/Header.jsx"
import Search from "../src/components/Search/Search.jsx"
import Select from "../src/components/Select/Select.jsx"
import Cards from "../src/components/Cards/Cards.jsx"
import "../src/components/header/header.css";
import "../src/App.css";

function App() {
  return (
    <>
      <Header />
      <section className="holder">
        <div className="container">
          <div className="holder__inner">
            <div className="holder__top">
              <Search />
              <Select />
            </div>
            <div className="holder__bottom">
              <ul className="list">
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
                <Cards />
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
