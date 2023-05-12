import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";


const Detail = () => {
  const {id} = useParams();
  const [character, setCharacter] =useState({})
  
    
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
       if (data.name) {
          setCharacter(data);
       } else {
          window.alert('No hay personajes con ese ID');
       }
    });
    return setCharacter({});
 }, [id]);
  
  
  return (
    <div>
        <img src={character && character.image} alt={character && character.name} />
        <h1>Name:"{character && character.name}"</h1> 
        <h2>Status:{character.status && character.status}</h2>
        <h2>Species:{character.species && character.species}</h2>
        <h2>Gender:{character && character.gender}</h2>
        <h2>Origin:{character.origin?.name && character.origin?.name}</h2>
        <Link to="/home">
            <button>Home</button>
        </Link>
    </div>
  )
}

export default Detail