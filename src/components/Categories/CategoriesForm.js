import api_client from '../../config/api_client';
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";

export default function PropertyForm() {
  let { id } = useParams();
  let navigate = useNavigate();
  const [name, setName] = useState('')
  

  useEffect(() => {
    if (id) {
      api_client.get(`/categories/${id}`).then(response => {
        const categories = response.data.categories
        setName(categories.name_id)
        
      })
    }
  }, [])

  const saveCategories = async () => {
    const categories = {
      name: name
    }
    console.log(name.id)

    if (id) {
      api_client.put(`http://localhost:3000/categories/${id}`, { categories }).then(response => {
        console.log("EDIT")
        navigate("/categories");
      })
    } else {
      api_client.post('http://localhost:3000/categories', { categories }).then(response => {
        console.log("DELETE")
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
