 import './SearchBar.css'
 import {useState} from 'react';
 
 
 const SearchBar = ({onSearch}) => {
   
   
   const [id,setId]  = useState('');//xomo guardar ID

   const handleChange = (event) => {
      setId(event.target.value)//este es lo que escribo en el input
   }
   
   return (
      <div className="searchBar">
         <input type='search' onChange={handleChange} value={id}/> 
         <button onClick={()=>{onSearch(id)}}>Agregar</button> 
      </div>
   );
};

export default SearchBar;
