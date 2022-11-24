import "../src/App.css";
import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Country } from "./Pages/Country";
import { Home } from "./Pages/Home/Home";

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then(data => setData(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <Routes>
        <Route path="/" element={<Home data={data} />} />
        <Route path="/country/:name" element={<Country />} />
      </Routes>
    </>
  );

}
export default App;
