import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../components/HomePage/HomePage'
import { Container, Row, Col } from 'react-bootstrap'
import DeleteCategories from '../components/Categories/DeleteCategories'
import CategoriesForm from '../components/Categories/CategoriesForm'
import CategoriesDetails from '../components/Categories/CategoriesDetails'


export default function ApplicationRouter() {
  return (
    <Container>
      <Row>
        <Col>
          <Router>
            <Routes>
              <Route exact path="/" element={<HomePage />}></Route>
              <Route exact path="/categories/new" element={<CategoriesForm/>}></Route>
              <Route exact path="/categories/:id" element={<CategoriesDetails />}></Route>
              <Route exact path="/categories/:id/edit" element={<CategoriesForm />}></Route>
              <Route exact path="/categories/:id/delete" element={<DeleteCategories />}></Route>
            </Routes>
          </Router>
        </Col>
      </Row>
    </Container>
  )
}
