import React from 'react'
import { Card,Button } from 'react-bootstrap'
function Products({Pname,info,img,link}) {
  return (
    <>
      <Card
        style={{ width: '18rem' }}
        className='border-0 bg-primary text-info card-shadow rounded-3 m-2'
      >
        <Card.Img variant='top' src={img} />
        <Card.Body>
          <Card.Title>{Pname}</Card.Title>
          <Card.Text>{info}</Card.Text>

          <Button
            variant='outline-light'
            className='text-uppercase fw-bold bg-warning border-0 '
            target='blank'
            href={link}
          >
            learn More
          </Button>
        </Card.Body>
      </Card>
    </>
  )
}

export default Products