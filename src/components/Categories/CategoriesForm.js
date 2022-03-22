import api_client from '../../config/api_client';
import { Button, Form } from "react-bootstrap";
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function PropertyForm() {
  let { id } = useParams();

  const [name, setName] = useState('')
  

  useEffect(() => {
    if (id) {
      api_client.get(`http://localhost:3000/categories`).then(response => {
        const namecategory = response.data.name
        setName(namecategory.name)
      
      })
    }
  }, [])

  const saveCategories = async () => {
    const namecategory = {
      name: name

    }

    if (id) {
      api_client.put(`http://localhost:3000/categories`, { namecategory }).then(response => {
        console.log(response)
      })
    } else {
      api_client.post('http://localhost:3000/categories', { namecategory }).then(response => {
        console.log(response)
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
