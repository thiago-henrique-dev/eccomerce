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
        
        const products = response.data
        setName(products.name)
        setPrice(products.price)
        setProductImage(products.productImage)
        setCategoryId(products.categoryId)
        console.log("form", response.data)
      })
    }
  }, [id])

  const saveProducts = async () =>{
   
    if(id){
        api_client.put(`/products/${id}`, { name,price,productImage,categoryId }).then(resp => { console.log(resp) })
    } else{
      api_client.post(`/products`, {name,price,productImage,categoryId }).then(resp => { 
        
        console.log("req", resp.name)
      
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
          <Form.Control name="price" value={price} onChange={(e) => { setPrice(e.target.value) }}/>
          <Form.Label>IMage</Form.Label>
          <Form.Control name="Imagem" value={productImage} onChange={(e) => { setProductImage(e.target.value) }}/>
          <Form.Label>Categoria</Form.Label>
          <Form.Control name="categoryId" value={categoryId} onChange={(e) => { setCategoryId(e.target.value) }}/>
          <Button className="btn btn-success" onClick={saveProducts}>Save</Button>
        </Form.Group>
      </Form>
    </div>
  )
}