import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, Outlet } from 'react-router-dom'

const Admin = () => {
  return (
    <Container className='my-5'>
      <Row>
        <Col md={4}>
          <ul className='list-group'>
            <li>
              <Link to={"/admin/dashbord"} className='list-group-item'>Dashbord</Link>
            </li>
            <li>
              <Link to={'/admin/products'} className='list-group-item'>Products</Link>
            </li>
            <li>
              <Link to={"/admin/tags"} className='list-group-item'>Tags</Link>
            </li>
            <li>
              <Link to={"/admin/category"} className='list-group-item'>Categorys</Link>
            </li>
            <li>
              <Link to={"#"} className='list-group-item'>Log Out</Link>
            </li>
          </ul>
        </Col>
        <Col md={8}><Outlet/></Col>
      </Row>
    </Container>
  )
}

export default Admin;