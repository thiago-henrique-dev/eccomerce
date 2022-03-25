import { Link } from 'react-router-dom'


export default function ProductRow({product}) {

console.log("aaa", product);

  return (
    <div>
      <Link to={`/products/${product}`}> {product.name}</Link>
                                        <br></br>
                                          R$:{product.price}
                                          <br></br>
                                          ID Categoria:{product.categoryId}
                                          <br></br>
      <Link className="btn btn-secondary" to={`/products/${product}/edit`}>Edit</Link>
      <Link className="btn btn-danger" to={`/products/${product}/delete`}>Delete</Link>
    </div>
  )
    
}