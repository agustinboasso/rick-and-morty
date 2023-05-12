import '../Cards/Cards.css'
import Card from '../Card/Card';

 const Cards = ({characters, onClose}) => {
   return (
      <div className='container'>
         {
            characters.map(({id, name, species, gender, image, origin, status}) =>{ //recorre y muestra con el metodo map. Metodo forEach sirve para recorrer y NO para mostrar
               return (
               
               <Card //pasa por props lo que quiere que renderice las cards que va a mostrar
                 
                 key={id}
                 id={id}
                 name= {name}
                 species={species}
                 gender={gender}
                 image={image}
                 origin={origin.name}
                 status={status}
                 onClose={onClose}
                 />
               )
            })
         }
      </div>
   )
};

export default Cards;