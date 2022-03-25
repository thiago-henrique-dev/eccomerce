import { Link } from 'react-router-dom'


export default function ProductRow({product}) {


  return (
    <div>
      <Link to={`/products/${product.productId}`}> {product.name}</Link>
                                        <br></br>
                                          R$:{product.price}
                                          <br></br>
                                          ID Categoria:{product.categoryId}
                                          <br></br>
      <Link className="btn btn-secondary" to={`/products/${product.productId}/edit`}>Edit</Link>
      <Link className="btn btn-danger" to={`/products/${product.productId}/delete`}>Delete</Link>
    </div>
  )
    
}