import { Link } from 'react-router-dom'


export default function CategoryRow({category}) {
  return (
    <div>
      <Link to={`/categories/${category.categoryId}`}>{category.name}</Link>
        <br></br>
      <Link className="btn btn-secondary" to={`/categories/${category.categoryId}/edit`}>Edit</Link>
      <Link className="btn btn-danger" to={`/categories/${category.categoryId}/delete`}>Delete</Link>
    </div>
  )
}
