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
  const [categoryId, setCategoryId] = useState('')
  

  useEffect(() => {
    if (id) {
      api_client.get(`/products/${id}`).then(response => {
        
        const products = response.data.products
        setName(products.name)
        setPrice(products.price)
        setCategoryId(products.categoryId)
        console.log("form", response.data)
      })
    }
  }, [id])

  const saveProducts = async () =>{
    const products = {
        name: name,
        price: price,
        categoryId: categoryId
    }

    if(id){
        api_client.put(`/products/${id}`, { products }).then(resp => { console.log(resp) })
    } else{
      api_client.post(`/products`, { products }).then(resp => { console.log(resp) })
  }
}

  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control name="Name" value={name} onChange={(e) => { setName(e.target.value) }}/>
          <Form.Label>Price</Form.Label>
          <Form.Control name="price" value={price} onChange={(e) => { setPrice(e.target.value) }}/>
          <Form.Label>Categoria</Form.Label>
          <Form.Control name="categoryId" value={categoryId} onChange={(e) => { setCategoryId(e.target.value) }}/>
          <Button className="btn btn-success" onClick={saveProducts}>Save</Button>
        </Form.Group>
      </Form>
    </div>
  )
}
