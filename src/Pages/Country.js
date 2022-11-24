import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export const Country = () => {
    const { name } = useParams();
    const [click, setClick] = useState({
        isLoading: true,
        isError: false,
        data: {},
    });
    useEffect(() => {
        fetch(`https://restcountries.com/v3.1/name/${name}`)
            .then((res) => res.json())
            .then(data => setClick({
                isLoading: false,
                isError: false,
                data: data,
            }))
            .catch((err) => setClick({
                isLoading: false,
                isError: true,
                data: {},
            }))
        console.log(click);
    }, [])

    return (
        <>
            {click.isLoading && (<h1>Loading...</h1>)}
            {click.isError && (<h1>Error</h1>)}
            {click.data.length && (
                <div>
                    <Link className="text-decoration-none text-black h5 pt-5 ps-5 d-block" to="/"> ◀ Back to Home</Link>
                    {
                        click.data.map((el) => (
                            <div className="d-flex align-items-center justify-content-center my-5 gap-5" >
                                <img src={el.flags.png} alt="" className="w-50" />
                                <div>
                                    <h1>{el.name.common}</h1>
                                    <div className="row">
                                        <div>
                                            <p>
                                                Native name : <span>{el.name.nativeName[Object.keys(el.name.nativeName)[0]].common}</span>
                                            </p>
                                            <p>
                                                Population :
                                                <span>
                                                    {el.population}
                                                </span>
                                            </p>
                                            <p>
                                                Region : <span>{el.region}</span>
                                            </p>
                                            <p>
                                                Sub Region : <span>
                                                    {el.subregion}
                                                </span>
                                            </p>
                                            <p>
                                                Capital : <span>
                                                    {el.capital}
                                                </span>
                                            </p>
                                        </div>
                                        <div>
                                            <p>Top Level Domain <span>{el.tld}</span></p>
                                            <p>Currencies <span>{el.currencies[Object.keys(el.currencies)].name}</span></p>
                                            <p>Languages  : {''}<span>{el.languages[Object.keys(el.languages)[0]]}</span></p>
                                        </div>
                                    </div>
                                    {
                                        el?.borders.length && (
                                            <div>
                                                Border Countries:{''}
                                                {el.borders.map(el => (
                                                    <button>{el}</button>
                                                ))}
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                            // ||
                            // <div className="d-flex align-items-center justify-content-center my-5 gap-5" >
                            //     <img src={el.flags.svg} alt="" className="w-50" />
                            // </div>
                        )
                        )
                    }
                </div>
            )}
        </>
    );
}