import "./Card.css";
import { Link } from "react-router-dom";
import { addFav, removeFav } from "../../redux/action";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    isFav
      ? removeFav(id)
      : addFav({ id, name, status, species, gender, origin, image, onClose });
    setIsFav(!isFav);
  };

  useEffect(() => {
    const isCharacterInFavorites = myFavorites.some((fav) => fav.id === +id);
    setIsFav(isCharacterInFavorites);
  }, [myFavorites, id]);

  return (
    <div className="card">
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <Link to={`/detail/${id}`}>
        <h2 className="card-name">Name: {name}</h2>

        <img className="img" src={image} alt="" />
        <br />
        <h2>Status: {status}</h2>
        <h2>Species: {species}</h2>
        <h2>Gender: {gender}</h2>
        <h2>Origin: {origin}</h2>
      </Link>
      <button
        onClick={() => {
          onClose(id);
        }}
      >
        Cerrar
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => dispatch(addFav(character)),
    removeFav: (id) => dispatch(removeFav(id)),
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
