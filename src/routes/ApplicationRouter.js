import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from '../components/HomePage/HomePage'
import { Container, Row, Col } from 'react-bootstrap'
import DeleteCategories from '../components/Categories/DeleteCategories'
import CategoriesForm from '../components/Categories/CategoriesForm'
import CategoriesDetails from '../components/Categories/CategoriesDetails'

import ProductDetails from '../components/Products/ProductDetails'
import ProductForm from '../components/Products/ProductForm'
import ProductList from '../components/Products/ProductList'
import DeleteProducts from '../components/Products/DeleteProducts'
import CategoryList from '../components/Categories/CategoriesList'
import OrderList from '../components/Orders/OrdersList'
import OrderForm from '../components/Orders/OrdersForm'
import OrderDetails from '../components/Orders/OrderDetails'
import DeleteOrder from '../components/Orders/OrderDetails'

export default function ApplicationRouter() {
  return (
    <Container>
      <Row>
        <Col>
          <Router>
            <Routes>

              <Route exact path="/" element={<HomePage />}></Route>
              <Route exact path="/categories" element={<CategoryList />}></Route>
              <Route exact path="/categories/new" element={<CategoriesForm/>}></Route>
              <Route exact path="/categories/:id" element={<CategoriesDetails />}></Route>
              <Route exact path="/categories/:id/edit" element={<CategoriesForm />}></Route>
              <Route exact path="/categories/:id/delete" element={<DeleteCategories />}></Route>

              <Route exact path="/products" element={<ProductList />}></Route>
              <Route exact path="/products/new" element={<ProductForm/>}></Route>
              <Route exact path="/products/:id" element={<ProductDetails />}></Route>
              <Route exact path="/products/:id/edit" element={<ProductForm />}></Route>
              <Route exact path="/products/:id/delete" element={<DeleteProducts />}></Route>


              <Route exact path="/orders" element={<OrderList />}></Route>
              <Route exact path="/orders/new" element={<OrderForm/>}></Route>
              <Route exact path="/orders/:id" element={<OrderDetails />}></Route>
              {/* <Route exact path="/orders/:id/edit" element={<OrderForm />}></Route>
              <Route exact path="/orders/:id/delete" element={<DeleteOrder />}></Route> */}

            </Routes>
          </Router>
        </Col>
      </Row>
    </Container>
  )
}
