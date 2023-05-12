import { createStore, applyMiddleware, compose } from "redux";
import  thunkMiddleware  from "redux-thunk";
import reducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION__ || compose; //nuestra aplicacion se conecte con la extension del navegador y podemos visualizar lo que sucede en nuestro estado global de redux en el navegador.


const store = createStore(reducer, composeEnhancer(applyMiddleware(thunkMiddleware))); //esta linea sirve para que podamos hacer peticiones a una API/s3ervidor



export default store;