import api_client from '../../config/api_client';
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

export default function OrderForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [productId, setProductId] = useState('')
  const [quantity, setQuantity] = useState('')

  

  useEffect(() => {
    if (id) {
      api_client.get(`/orders/${id}`).then(response => {
        const orders = response.data
        setQuantity(orders.productId)
        setQuantity(orders.quantity)
        console.log("ae?", response.data)
      })
    }
  }, [])

  const saveOrders = async () => {
  
    if (id) {
      api_client.put(`/orders/${id}`, { productId, quantity }).then(response => {
        console.log("EDIT")
        navigate("/orders");
      })
    } else {
      api_client.post('/orders', { productId, quantity }).then(response => {
        navigate("/orders");
        console.log("POST", response.data.quantity)

      })
    }
  }

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>ID do Produto</Form.Label>
          <Form.Control name="productId" value={productId} onChange={(e) => { setProductId(e.target.value) }}/>
          <Form.Label>Quantity</Form.Label>
          <Form.Control as="textarea" name="quantity" value={quantity} onChange={(e) => { setQuantity(e.target.value) }}/>
          <Button className="btn btn-success" onClick={saveOrders}>Save</Button>
          <Link className="btn btn-dark" to="/products">Back</Link>

        </Form.Group>
      </Form>
    </div>
  )
}
