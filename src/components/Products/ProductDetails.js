import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api_client from '../../config/api_client';

export default function ProductsDetails() {
  let { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    api_client.get(`http://localhost:3000/products/${id}`).then(response => {
      setProduct(response.data.product)
    })
  }, [id]);

  return (
    <div>
      <h1>Categories Details</h1>
      <h3>{product}</h3>
    </div>
  )
}
