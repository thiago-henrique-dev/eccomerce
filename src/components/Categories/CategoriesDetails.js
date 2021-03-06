import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import api_client from '../../config/api_client';

export default function PropertyDetails() {
  let { id } = useParams();
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    api_client.get(`categories/${id}`).then(response => {
      setCategories(response.data.categories)
    })
  }, [id]);

  return (
    <div>
      <h1>Categories Details</h1>
      <h3>{categories.id}</h3>
    </div>
  )
}
