
import { Link } from 'react-router-dom'
import { Card, Container, Row, Col } from 'react-bootstrap';


export default function OrderList({order}) {
    return (
      <Row className='p-16 justify-content-center'>
        <Col>
      <Card className='' style={{ width: '16em', height: 'auto' }}>
        <Link to={`/orders/${order.id}`}></Link>
        <Card.Img variant="top" src={order.product.productImage} />
        <Card.Body id='bodyProduct'>
          <Card.Title>{order.product.name}</Card.Title>
          <div className='card_text_list_products'>
            <div className='product-desc'>
            R${order.product.price}
            <br/>
            Quantidade:{order.quantity}
              <br />
            </div>
          
          </div>
      <hr/>
      <Row>
      <Link className="btn btn-secondary" to={`/orders/${order.orderId}/edit`}>Edit</Link>
      <Link className="btn btn-danger" to={`/orders/${order.orderId}/delete`}>Delete</Link>
      </Row>

      <hr/>
        </Card.Body>
      </Card>
      </Col>
    </Row>
    )
    
      
  }