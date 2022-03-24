
import { Link } from 'react-router-dom'
  

export default function OrderList({order}) {
    return (
      <div>
        
            <p>Pedidos:</p>
      <Link to={`/orders/${order.id}`}>{order.product.name}</Link>
                                            <br></br>
                                       R$: {order.product.price}
                                            <br></br>
                                      Quantidade: {order.quantity}
                                            <br></br>

      <Link className="btn btn-secondary" to={`/orders/${order}/edit`}>Edit</Link>
      <Link className="btn btn-danger" to={`/orders/${order}/delete`}>Delete</Link>
    </div>
    )
      
  }