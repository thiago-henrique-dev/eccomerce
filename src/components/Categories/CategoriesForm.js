import api_client from '../../config/api_client';
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function CategoryForm() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [name, setName] = useState("")


  useEffect(() => {
    if (id) {
      api_client.get(`/categories/${id}`).then(response => {
        const categories = response.data
        setName(categories.name)
        
      })
    }
  }, [])

  const saveCategories = async () => {
    const categories = {
      name: name
    }
    
    if (id) {
      api_client.put(`/categories/${id}`, { name }).then(response => {
        console.log(response.data, "eeeee??")
        navigate("/categories");
      })
    } else {
      api_client.post('/categories', { name} ).then(response => {
        console.log(response.data, "eqi????")
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
          <Button className="btn btn-success" onClick={saveCategories}>Save</Button>
        </Form.Group>
      </Form>
    </div>
  )
}
