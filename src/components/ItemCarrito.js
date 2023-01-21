import React from "react";

const ItemCarrito = ({ data, deleteFromCart }) => {
  const { id, nombre, precio, cantidad } = data;

  return (
    <div className="col-md-12 d-flex flex-row justify-content-between mb-3">
      <h4>{nombre} </h4>
      <h5>
        $ {precio} x {cantidad}= $ {precio * cantidad}
      </h5>
      <img src={data.src} style={{ maxWidth: 80, heigth: 80 }} alt="" />
      <button
        onClick={() => deleteFromCart(id, false)}
        className="btn btn-outline-dark btn-sm"
      >
        Eliminar uno
      </button>
      <button
        onClick={() => deleteFromCart(id, true)}
        className="btn btn-outline-danger btn-sm"
      >
        Eliminar todos
      </button>
    </div>
  );
};

export default ItemCarrito;
