import { Link } from 'react-router-dom'


export default function ProductRow({product}) {
  return (
    <div>
      <Link to={`/products/${product.id}`}>{product.name}</Link>
      <Link className="btn btn-secondary" to={`/products/${product}/edit`}>Edit</Link>
      <Link className="btn btn-danger" to={`/products/${product}/delete`}>Delete</Link>
    </div>
  )
}
