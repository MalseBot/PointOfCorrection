import React from 'react'
import '../App.css'
import data from '../Product data.js'
import Products from '../Products.js'
import { Row,Col } from 'react-bootstrap'
function Shop() {

  return (
    <div className='main-color'>
      <Row className='row-cols-md-3 row-cols-sm-2 m-0 row-cols-xlg-4'>
        {data.map((data)=>{
        return(
          <Col className='mb-3'>
          <Products key={data.id} {...data}></Products></Col>
        )
      })}
      </Row>
      
    </div>
  )
}

export default Shop