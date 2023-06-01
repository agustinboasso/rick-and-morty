let myFavorites = [];

const postFav = (req, res) => {
  const { id, status, name, species, origin, image, gender } = req.body;

  const newFavorite = {
    id: id,
    status: status,
    name: name,
    species: species,
    origin: origin.name,
    image: image,
    gender: gender,
  };

  myFavorites.push(newFavorite);

  return res.json(newFavorite);
};

const deleteFav = (req, res) => {
  try {
    const { id } = req.params;

    myFavorites = myFavorites.filter((fav) => fav.id !== +id);

    return res.status(200).json(myFavorites);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  postFav,
  deleteFav,
};
