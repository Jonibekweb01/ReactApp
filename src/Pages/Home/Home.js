import "../../components/header/header.css";
import { useEffect, useState } from "react";
import Search from "../../components/Search/Search";
import Select from "../../components/Select/Select";
import Cards from "../../components/Cards/Card";
import Header from "../../components/header/Header";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import './home.css';

export const Home = () => {

    const [data, setData] = useState([]);
    const [value, setValue] = useState("");
    const [select, setSelect] = useState("");
    const { theme, setTheme } = useContext(ThemeContext);

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
            <section className={theme}>
                <div className="holder">
                    <div className="container">
                        <div className="holder__inner">
                            <div className="holder__top">
                                <Search setValue={setValue} />
                                <Select setSelect={setSelect} />
                            </div>
                            <div className="holder__bottom">
                                {data.length && (
                                    <ul className="list flex-wrap d-flex gap-5 justify-content-between list-unstyled">
                                        {
                                            data.map((item) => (
                                                <Cards key={item.name.official} all={item} />
                                            ))
                                        }
                                    </ul>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>

    );
}
