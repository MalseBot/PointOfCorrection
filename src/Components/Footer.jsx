import React from 'react'
import { Row, Col, ListGroup } from 'react-bootstrap'
import '../App.css'

function Footer() {
  return (
    <div className='pt-4 '>
      <div className='bg-secondary'>
        <Row className='m-0   text-success pt-1 pb-1 footer-shadow'>
          <Col  className='p-2 border-end border-white border-opacity-25'>
            <ListGroup className=' bg-transparent'>
              <ListGroup.Item className=' bg-transparent border-0 a-hover '>
                <a
                  className='text-decoration-none text-success fw-bold '
                  href='/'
                >
                  home
                </a>
              </ListGroup.Item>
              <ListGroup.Item className=' bg-transparent border-0 a-hover'>
                <a
                  className='text-decoration-none text-success fw-bold '
                  href='./shop.jsx'
                >
                  Shop
                </a>
              </ListGroup.Item>
              <ListGroup.Item className=' bg-transparent border-0 a-hover'>
                <a
                  className='text-decoration-none text-success fw-bold '
                  href='./About.jsx'
                >
                  About us
                </a>
              </ListGroup.Item>
              <ListGroup.Item className=' bg-transparent border-0 a-hover'>
                <a
                  className='text-decoration-none text-success fw-bold '
                  href='./Contact.jsx'
                >
                  Contact us
                </a>
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col
            className='p-2 border-end border-white border-opacity-25'
          >
            <ListGroup className=' bg-transparent'>
              <h4>contacts</h4>
              <ListGroup.Item
                className=' bg-transparent border-0'
                variant='success'
              >
                number :: +20105648852
              </ListGroup.Item>
              <ListGroup.Item
                className=' bg-transparent border-0'
                variant='success'
              >
                place :: souter |alexaandria
              </ListGroup.Item>
              <ListGroup.Item
                className=' bg-transparent border-0'
                variant='success'
              >
                email :: eslamwtf@gmail.com
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col className='p-2'>
            <ListGroup className=' bg-transparent'>
              <h4>socials</h4>
              <ListGroup.Item
                className=' bg-transparent border-0'
                variant='success'
              >
                facebook.com
              </ListGroup.Item>
              <ListGroup.Item
                className=' bg-transparent border-0'
                variant='success'
              >
                twitter.com
              </ListGroup.Item>
              <ListGroup.Item
                className=' bg-transparent border-0'
                variant='success'
              >
                instagram.com
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default Footer
