
const initialState = {
    myFavorites : [],
    allCharactersFav: []
}


const reducer = (state = initialState, action)=>{
    switch(action.type){
        
        case 'ADD_FAV': 
            return {
                ...state,
                myFavorites: [...state.allCharactersFav, action.payload], //lo que ya tenia (...) + lo qyue se esta agregabndo (action.payload = character )
                allCharactersFav: [...state.allCharactersFav, action.payload], 
            }
                    
        
        case 'REMOVE_FAV':
            return {
                ...state,
                myFavorites: state.myFavorites.filter(pepito => pepito.id !== Number(action.payload))
            }    

        case 'FILTER':
            
            const allCharactersFiltered = state.allCharactersFav.filter((char)=> char.gender === action.payload)
        
            return {
                ...state,
                myFavorites: allCharactersFiltered
                

            }    

        case 'ORDER':
            const allCharactersFavsCopy = [...state.allCharactersFav];
            return{
                ...state,
                myFavorites:
                action.payload === "A" 
                ? allCharactersFavsCopy.sort((a, b)=> a.id < b.id ) 
                : allCharactersFavsCopy.sort((a,b) => b.id < a.id)
            }
        default:
            return {
                ...state
            }
    }
}

export default reducer