import { Link } from 'react-router-dom'


export default function ProductRow({product}) {

console.log("aaa", product);

  return (
    <div>
      <Link to={`/products/${product}`}>{product.productId}</Link>
      <Link className="btn btn-secondary" to={`/products/${product}/edit`}>Edit</Link>
      <Link className="btn btn-danger" to={`/products/${product}/delete`}>Delete</Link>
    </div>
  )
    
}