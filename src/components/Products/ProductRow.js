import { Link } from 'react-router-dom'
import { Card, Container } from 'react-bootstrap';
import './ProductRow.css'


export default function ProductRow({ product }) {


  return (
    <div className='products'>
      <Card className='' style={{ width: '16rem', height: '23rem' }}>
        <Link to={`/products/${product.productId}`}></Link>
        <Card.Img variant="top" src={product.productImage} />
        <Card.Body id='bodyProduct'>
          <Card.Title>{product.name}</Card.Title>
          <div className='card_text_list_products'>
            <div className='product-desc'>
              <br />
            </div>
            <strong>Price: R${product.price}</strong>
          </div>

        </Card.Body>




      </Card>
      <Link className="btn btn-secondary" to={`/products/${product.productId}/edit`}>Edit</Link>
      <Link className="btn btn-danger" to={`/products/${product.productId}/delete`}>Delete</Link>
    </div>



  )

}