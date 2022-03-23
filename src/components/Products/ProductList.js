import { useEffect, useState } from 'react';
import api_client from '../../config/api_client';
import { Link } from 'react-router-dom'
import ProductRow from './ProductRow'

export default function ProductList() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    api_client.get('http://localhost:3000/products').then(response => {
      setProducts(response.data)
    })
  }, []);
  
  console.log(products)
  return (
    <div className="categories-list">
      {products.map(product => <ProductRow product={product} key={product.id} />)}
      <p>
        <Link className="btn btn-success mt-1" to="/products/new">Add Product</Link>
      </p>
      <p>
      </p>
    </div>
  )
}
