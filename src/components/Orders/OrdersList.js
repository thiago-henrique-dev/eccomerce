import { useEffect, useState } from "react";
import api_client from "../../config/api_client";
import { Link } from 'react-router-dom'
import OrderRow from "./OrderRow";


export default function OrderList(){
    const [productId, setProductId] = useState([])


    useEffect(() => {
        api_client.get('http://localhost:3000/orders').then(response => {
            setProductId(response.data.productId)
        })
    }, [])

    return (
        <div className="orders-list">
            {productId.map(order => <orderRow order={order.id} key={order} />)}
            <p>
                <Link className="btn btn-success" to="/orders/new">Add New Orders</Link>
            </p>
        </div>
    )

}