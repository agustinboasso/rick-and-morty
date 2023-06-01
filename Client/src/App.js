import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import NavBar from "./components/NavBar/NavBar";
import { useState, useEffect } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

const EMAIL = "boassoagustin@gmail.com";
const PASSWORD = "asd123";

function App() {
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation(); //para agarrar el path y poder hacer la comparacion con el navvar

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  async function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    });
  }

  // function login(userData) {
  //    if (userData.password === PASSWORD && userData.email === EMAIL) {
  //       setAccess(true);
  //       navigate('/home');
  //    }
  // }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  }

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  return (
    <div className="App">
      <header className="App">
        {pathname !== "/" && <NavBar onSearch={onSearch} />}{" "}
        {/* Para que la barra se muestre en todos los lugares menos en '/'*/}
        <Routes>
          <Route path="/" element={<Form login={login} />} />
          <Route
            path="/home"
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path="/about" element={<About />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;

//https://rickandmortyapi.com/api/character/${id}
