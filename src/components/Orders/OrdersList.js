import { useEffect, useState } from "react";
import api_client from "../../config/api_client";
import { Link } from 'react-router-dom'
import OrderRow from "./OrdersRow";
import { Row } from "react-bootstrap";




export default function OrderList(){
    const [orders, setOrders] = useState([])
    
    useEffect(() => {
        api_client.get('/orders').then(response => {
            setOrders(response.data.orders)
        })
    }, [])

    function getOrders(){
        return(
        <>
        <Row className="m-1 p-5 row-cols-2 row-cols-md-4">
        {orders.map(order => <OrderRow order={order} key={order} />)}

        </Row>
        </>

        )
    }
    return (
        <Row className="orders-list flex-row">
            {getOrders()}
            <Row>
                <Link className="btn btn-dark" to="/products">Back</Link>
            </Row>
        </Row>
    )

}