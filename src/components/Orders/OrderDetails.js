import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api_client from '../../config/api_client';

export default function PropertyDetails() {
  let { id } = useParams();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api_client.get(`orders/${id}`).then(response => {
      setOrders(response.data.orders)
    })
  }, [id]);

  return (
    <div>
      <h1>Orders Details</h1>
      <h3>{orders.id}</h3>
    </div>
  )
}
