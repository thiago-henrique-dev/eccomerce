import React from "react";
import { Link } from "react-router-dom";


export default function MenuTop(){
    return(
        <>
        <div className="product">
      <h1>Produtos</h1>
      <Link className="btn btn-secondary" to={`/products`}>PRODUTOS</Link>
    </div>
    <br></br>
      <div className="category">
        <h1>Categorias</h1>
       <Link className="btn btn-secondary" to={`/categories`}>CATEGORIAS</Link>
      </div>
      <br></br>
      <div className="orders">
        <h1>Pedidos</h1>
       <Link className="btn btn-secondary" to={`/orders`}>PEDIDOS</Link>
      </div>

        </>
    )
}
