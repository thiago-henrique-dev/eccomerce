// import api_client from '../../config/api_client';
// import { Button, Form } from "react-bootstrap";
// import { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { useNavigate } from "react-router-dom";

// export default function PropertyForm() {
//   let { id } = useParams();
//   let navigate = useNavigate();

//   const [productId, setProductId] = useState('')
//   const [quantity, setQuantity] = useState('')
 
  

//   useEffect(() => {
//     if (id) {
//       api_client.get(`/orders/${id}`).then(response => {
//         const orders = response.data
//         setQuantity(orders.productId)
//         setQuantity(orders.quantity)
   
//       })
//     }
//   }, [])

//   const saveOrders = async () => {
//     const orders = { 
//     productId: productId,
//     quantity: quantity
//     }
    

//     if (id) {
//       api_client.put(`http://localhost:3000/orders/${id}`, { orders }).then(response => {
//         console.log("EDIT")
//         navigate("/orders");
//       })
//     } else {
//       api_client.post('http://localhost:3000/orders', { orders }).then(response => {
//         console.log("DELETE")
//         navigate("/orders");

//       })
//     }
//   }

//   return (
//     <div>
//       <Form>
//         <Form.Group>
//           <Form.Label>Name</Form.Label>
//           <Form.Control name="productId" value={productId} onChange={(e) => { setProductId(e.target.value) }}/>
//           <Form.Label>Price</Form.Label>
//           <Form.Control as="textarea" name="price" value={price} onChange={(e) => { setPrice(e.target.value) }}/>
//           <Form.Label>Price</Form.Label>
//           <Form.Control name="price" value={setProductImage} onChange={(e) => { setProductImage(e.target.value) }}/>
//           <Form.Label>CategoryId</Form.Label>
//           <Form.Control name="area_sqmt" value={categoryId} onChange={(e) => { setCategoryId(e.target.value) }}/>
//           <Button className="btn btn-success" onClick={saveProducts}>Save</Button>
//         </Form.Group>
//       </Form>
//     </div>
//   )
// }
