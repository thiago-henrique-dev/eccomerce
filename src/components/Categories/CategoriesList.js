import { useEffect, useState } from 'react';
import api_client from '../../config/api_client';
import { Link } from 'react-router-dom'
import CategoryRow from './CategoriesRow';

export default function CategoryList() {
  const [categories, setCategories] = useState([]);
  
  useEffect(() => {
    api_client.get('http://localhost:3000/categories').then(response => {
      setCategories(response.data.categories)
      console.log(response);

    })
  }, []);

  return (
    <div className="categories-list">
      {categories.map(category => <CategoryRow category={category} key={category} />)}
      <br></br>
      <p>
        <Link className="btn btn-success" to="/categories/new">Add New Category</Link>
      </p>
    </div>
  )
}
