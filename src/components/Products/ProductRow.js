import { Link } from 'react-router-dom'
import { Card, Container, Row, Col } from 'react-bootstrap';
import './ProductRow.css'


export default function ProductRow({ product }) {


  return (
    <Row className='p-10 justify-content-center'>
      <Col >
      <Card className='' style={{ width: '17em' }}>
        <Link to={`/products/${product.productId}`}></Link>
        <Card.Img variant="top" src={product.productImage} />
        <Card.Body id='bodyProduct'>
          <Card.Title>{product.name}</Card.Title>
          <div className='card_text_list_products'>
            <div className='product-desc'>
            <strong>R${product.price}</strong>
              <br />
            </div>
          
          </div>
      <hr/>
      <Row>
        <Link className="btn btn-secondary" to={`/products/${product.productId}/edit`}>Edit</Link>
        <Link className="btn btn-danger" to={`/products/${product.productId}/delete`}>Delete</Link>
        <Link className="btn btn-dark" to="/orders/new">Add to Cart</Link>
      </Row>
      <hr/>
        </Card.Body>
      </Card>
      </Col>


    </Row>



  )

}