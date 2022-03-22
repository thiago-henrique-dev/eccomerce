import { Link } from 'react-router-dom'


export default function CategoryRow({category}) {
  return (
    <div>
      <Link to={`/categories/${category.id}`}>{category}</Link>
      <Link className="btn btn-secondary" to={`/categories/${category}/edit`}>Edit</Link>
      <Link className="btn btn-danger" to={`/categories/${category}/delete`}>Delete</Link>
    </div>
  )
}
