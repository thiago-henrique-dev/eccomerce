
import { Link } from 'react-router-dom'

export default function orderRow({ order }) {
    return (
        <div>
            <Link to={`/orders/${order.id}`}>{order.name}</Link>
            <Link className="btn btn-secondary" to={`/banks/${order.id}/edit`}>Edit</Link>
            <Link className="btn btn-danger" to={`/banks/${order.id}/delete`}>Delete</Link>
        </div>
    )
}