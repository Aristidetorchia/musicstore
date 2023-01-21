import React from "react";
import { useReducer, useEffect } from "react";
import { carritoInitialState, carritoReducer } from "./reducer";
import Producto from "./Producto";
import mono_22 from "../images/mono_22.jpg";
import { TYPES } from "./actions";
import ItemCarrito from "./ItemCarrito";
import axios from "axios";

const Carrito = () => {
  const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);

  const actualizarEstado = async () => {
    const productosURL = "http://localhost:8080/products";
    const carritoURL = "http://localhost:8080/carrito";

    const listaProductos = await axios.get(productosURL);
    const carrito = await axios.get(carritoURL);

    console.log(listaProductos.data)

    const nuevosProductos= listaProductos.data;
    const nuevoCarrito= carrito.data;

    dispatch({ type: TYPES.READ_STATE , payload:[nuevosProductos, nuevoCarrito] });
  };

  useEffect(() => {
    actualizarEstado();
  }, []);

  const { products, carrito } = state;

  const addToCart = (id) => {
    dispatch({ type: TYPES.ADD_TO_CART, payload: id });
  };
  const deleteFromCart = (id, eliminarTodos) => {
    if (eliminarTodos) {
      dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id });
    } else {
      dispatch({ type: TYPES.REMOVE_ITEM, payload: id });
    }
  };
  const cleanCart = () => {};

  return (
    <div className="container-fluid">
      <h1 style={{ textAlign: "center" }}>Carrito de compras</h1>
      <h2>🎸 Guitarras 🎸 </h2>
      <div className="row">
        {products.map((producto) => {
          return (
            <Producto key={producto.id} data={producto} addToCart={addToCart} />
          );
        })}
      </div>
      <h2>Carrito</h2>
      <div className="row">
        {carrito.map((item, index) => {
          return (
            <ItemCarrito
              key={index}
              data={item}
              deleteFromCart={deleteFromCart}
            />
          );
        })}
      </div>
      {/* <button className="btn btn-outline-danger">Limpiar</button> */}
      <div className="container-fluid">
        <br />
        <img src={mono_22} className="d-block w-100" alt="No Encontrada" />
      </div>
    </div>
  );
};

export default Carrito;
