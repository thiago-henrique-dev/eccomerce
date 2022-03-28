import { useEffect, useState } from 'react';
import api_client from '../../config/api_client';
import { Link } from 'react-router-dom'
import CategoryRow from './CategoriesRow';
import { Row } from "react-bootstrap";


export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    api_client.get('/categories').then(response => {
      setCategories(response.data.categories)
      console.log(response);

    })
  }, []);
  
  function getCategories(){
    return (
      <>
      <Row className="m-1 p-5 row-cols-2 row-cols-md-4">
      {categories.map(category => <CategoryRow category={category} key={category} />)}
      </Row>
      </>
    )
  }


  return (
    <Row className="product-list flex-row">
        {getCategories()}
        <Row className='justify-content'>
        <Link className="btn btn-dark" to="/categories/new">Add New Category</Link>
        <Link className="btn btn-success" to="/products">Back</Link>

        </Row>
      
    </Row>
  )
}
