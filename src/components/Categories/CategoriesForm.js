import api_client from '../../config/api_client';
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import './Categories.css'

export default function CategoryForm() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [name, setName] = useState("")
  const [categoryImage, setCategoryImage] = useState(``)


  useEffect(() => {
    if (id) {
      api_client.get(`/categories/${id}`).then(response => {
        const categories = response.data
        setName(categories.name)
        setCategoryImage(categories.categoryImage)
        console.log("res", response.data)
        
      })
    }
  }, [])

  const saveCategories = async () => {
  
    
    if (id) {
      api_client.put(`/categories/${id}`, { name, categoryImage }).then(response => {
        console.log(response.data, "eeeee??")
        navigate("/categories");
      })
    } else {
      api_client.post('/categories', { name, categoryImage } ).then(response => {
          console.log("req", response.categoryImage)
          navigate("/categories");
        
      })
    }
  }


  return (
    <div>
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control as="textarea" name="name" value={name} onChange={(e) => { setName(e.target.value) }}/>
          <Form.Label>Imagem</Form.Label>
          <Form.Control as="textarea" name="productImage" value={categoryImage} onChange={(e) => { setCategoryImage(e.target.value) }}/>
          <Button className="btn btn-success" onClick={saveCategories}>Save</Button>
        </Form.Group>
      </Form>
    </div>
  )
}
