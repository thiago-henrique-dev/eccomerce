import { useEffect, useState } from "react";
import api_client from "../../config/api_client";
import { Link } from 'react-router-dom'
import ProductRow from "../Products/ProductRow";


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
          {products.map((product) => <ProductRow product={product} key={product} />)}
        </>
      )
    }

    return (
      <>
        <div className="product-list">
            {getProducts()}
            <p>
                <Link className="btn btn-success" to="/products/new">Add New Product</Link>
            </p>
        </div>
      </>
    )
}