import { useEffect, useState } from "react";
import api_client from "../../config/api_client";
import { Link } from 'react-router-dom'

import ProductRow from "../Products/ProductRow";
import { Row } from "react-bootstrap";


export default function ProductList(){
    const [products, setProducts] = useState([])

    
    useEffect(() => {
        api_client.get('/products').then(response => {
            setProducts(response.data)
          })
      }
    , [])
    function getProducts(){
      return (
        <>
        <Row className="m-1 p-5 row-cols-2 row-cols-md-4">
          {products.map((product) => <ProductRow product={product} key={product.productId} />)}
        </Row>
        </>
      )
    }


    return (
      <>
        <Row className="product-list flex-row">
            {getProducts()}
            <Row>
            <Link className="btn btn-dark" to="/orders/new">Add to Cart</Link>            </Row >
        </Row>
      </>
    )
}