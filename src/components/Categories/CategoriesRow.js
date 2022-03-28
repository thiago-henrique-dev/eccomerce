import { Link } from 'react-router-dom'
import { Card, Container, Row, Col } from 'react-bootstrap';
import './Categories.css'



export default function CategoryRow({category}) {
  return (
    <Row className='p-5 justify-content-center'>
       <Col>
       <Card className='' style={{ width: '17rem', height: 'auto' }}>
        <Link to={`/categories/${category.categoryId}`}></Link>
        <Card.Img variant="top" src={category.categoryImage} />
        <Card.Body id='bodyProduct'>
          <Card.Title>{category.name}</Card.Title>
          <div className='card_text_list_products'>
            <div className='product-desc'>
              <br />
            </div>
            <strong>Categoria:{category.categoryId} </strong>
          </div>
          <Row>
      <Link className="btn btn-secondary" to={`/categories/${category.categoryId}/edit`}>Edit</Link>
      <Link className="btn btn-danger" to={`/categories/${category.categoryId}/delete`}>Delete</Link>
        </Row>
        </Card.Body>

      </Card>
     </Col>
    </Row>


  )
  
 

}
