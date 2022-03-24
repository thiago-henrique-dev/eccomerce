import React from 'react';
import CategoriesList from '../Categories/CategoriesList'
import ProductList from '../Products/ProductList'
import { Link } from "react-router-dom";
import OrderList from "../Orders/OrdersList"

export default function HomePage() {
  return (
    <>   
    <div>
      <h1>Produtos</h1>
      <Link className="btn btn-secondary" to={`/products`}>PRODUTOS</Link>
    </div>
    <br></br>
      <div>
        <h1>Categorias</h1>
       <Link className="btn btn-secondary" to={`/categories`}>CATEGORIAS</Link>
      </div>
      <br></br>
      <div>
        <h1>Pedidos</h1>
       <Link className="btn btn-secondary" to={`/orders`}>PEDIDOS</Link>
      </div>
    </>
  )
}
