import React from 'react';
import CategoriesList from '../Categories/CategoriesList'
import ProductList from '../Products/ProductList'
import { Link } from "react-router-dom";
import OrderList from "../Orders/OrdersList"

export default function HomePage() {
  return (
    <>
      <h1>Categorias</h1>
        {/* <ProductList/> */}
      <CategoriesList />
      {/* <OrderList></OrderList> */}
    </>
  )
}
