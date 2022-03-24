import { useEffect, useState } from "react";
import api_client from "../../config/api_client";
import { Link } from 'react-router-dom'
import OrderRow from "./OrdersRow";


export default function OrderList(){
    const [orders, setOrders] = useState([])
    
    useEffect(() => {
        api_client.get('http://localhost:3000/orders').then(response => {
            setOrders(response.data.orders)
        })
    }, [])

    console.log("chegou?", orders)

    return (
        <div className="orders-list">
            {orders.map(order => <OrderRow order={order} key={order} />)}
            <p>
                <Link className="btn btn-success" to="/orders/new">Add New Orders</Link>
            </p>
        </div>
    )

}