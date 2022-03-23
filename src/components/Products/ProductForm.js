import api_client from '../../config/api_client';
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function PropertyForm() {
  let { id } = useParams();
  let navigate = useNavigate();

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [productImage, setProductImage] = useState('')
  const [categoryId, setCategoryId] = useState('')
  

  useEffect(() => {
    if (id) {
      api_client.get(`/products/${id}`).then(response => {
        const products = response.data.products
        setName(products.name)
        setPrice(products.price)
        setProductImage(products.productImage)
        setCategoryId(products.categoryId)
        
      })
    }
  }, [])

  const saveProducts = async () => {
    const products = {
      name: name,
      price: price,
      productImage: productImage,
      categoryId: categoryId
    }
    

    if (id) {
      api_client.put(`http://localhost:3000/products/${id}`, { products }).then(response => {
        console.log("EDIT")
        navigate("/products");
      })
    } else {
      api_client.post('http://localhost:3000/products', { products }).then(response => {
        console.log("DELETE")
        navigate("/products");

      })
    }
  }

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control name="Name" value={name} onChange={(e) => { setName(e.target.value) }}/>
          <Form.Label>Price</Form.Label>
          <Form.Control as="textarea" name="price" value={price} onChange={(e) => { setPrice(e.target.value) }}/>
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" value={setProductImage} onChange={(e) => { setProductImage(e.target.value) }}/>
          <Form.Label>CategoryId</Form.Label>
          <Form.Control name="area_sqmt" value={categoryId} onChange={(e) => { setCategoryId(e.target.value) }}/>
          <Button className="btn btn-success" onClick={saveProducts}>Save</Button>
        </Form.Group>
      </Form>
    </div>
  )
}
