import React from 'react'
import { Container, Card, Col, Row, Form, Button } from 'react-bootstrap'

function Contact() {
  return (
    <div className='text-info'>
      <div className='contact-pic d-flex justify-content-center align-items-center top-shadow mb-5'></div>
      <Container>
        <h2 className='text-success border-bottom border-success'>
          Most asked Questions{' '}
        </h2>
        <Row className='row-cols-lg-4'>
          <Col>
            <Card
              style={{ width: '17rem' }}
              className='border-0 bg-primary text-info card-shadow rounded-3 m-2'
            >
              <Card.Img variant='top' src='' />
              <Card.Body>
                <Card.Title>How to get the copouns?</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  culpa blanditiis minima? Fuga ipsum, commodi consequatur
                  accusantium earum explicabo? Possimus vero eius quae, enim
                  perferendis ipsa iure magnam aut architecto!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: '17rem' }}
              className='border-0 bg-primary text-info card-shadow rounded-3 m-2'
            >
              <Card.Img variant='top' src='' />
              <Card.Body>
                <Card.Title>the product's website is bugging</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  culpa blanditiis minima? Fuga ipsum, commodi consequatur
                  accusantium earum explicabo? Possimus vero eius quae, enim
                  perferendis ipsa iure magnam aut architecto!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: '17rem' }}
              className='border-0 bg-primary text-info card-shadow rounded-3 m-2'
            >
              <Card.Img variant='top' src='' />
              <Card.Body>
                <Card.Title>what's the fastest dilvery way ?</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  culpa blanditiis minima? Fuga ipsum, commodi consequatur
                  accusantium earum explicabo? Possimus vero eius quae, enim
                  perferendis ipsa iure magnam aut architecto!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card
              style={{ width: '17rem' }}
              className='border-0 bg-primary text-info card-shadow rounded-3 m-2'
            >
              <Card.Img variant='top' src='' />
              <Card.Body>
                <Card.Title>Can i pay for the order in cash ?</Card.Title>
                <Card.Text>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et
                  culpa blanditiis minima? Fuga ipsum, commodi consequatur
                  accusantium earum explicabo? Possimus vero eius quae, enim
                  perferendis ipsa iure magnam aut architecto!
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Form className='text-success border-top border-success pt-3'>
          <Form.Group  controlId='exampleForm.ControlInput1'>
            <Form.Label>Email address</Form.Label>
            <Form.Control required type='email' placeholder='name@example.com' />
          </Form.Group>
          <Form.Group className='' controlId='exampleForm.ControlTextarea1'>
            <Form.Label>your question</Form.Label>
            <Form.Control required as='textarea' rows={3} />
          </Form.Group>
          <Button className='mt-3 bg-warning border-0' variant='outline-light' type='submit'>Submit</Button>
        </Form>
        <p className='text-success text-center fw-bold'>We will respond to your quistion in 48H most. <br />hope you have a good day.</p>
      </Container>
    </div>
  )
}

export default Contact
