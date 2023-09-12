import React from 'react'
import { Container, Card } from 'react-bootstrap'
import whoWeAre from '../imgs/whoweare.jpg'
import gradBG from '../imgs/grad-bg.jpg'
import gradBG2 from '../imgs/grad-bg-2.jpg'
import '../App.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
function About() {
  return (
    <div className='text-info'>
      <div className='about-pic d-flex justify-content-center align-items-center top-shadow mb-5'></div>
      <Container>
        <Card className=' border-0 card-shadow mt-5 mb-5'>
          <Card.Img src={whoWeAre} height={400} alt='Who we are' />
          <Card.ImgOverlay>
            <h2>Who We Are</h2>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit,
              repellendus pariatur placeat tempora culpa debitis quod nobis
              deserunt aliquid ipsam quaerat. Error fugiat voluptate vel sequi
              harum totam magni ea.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className='border-0 card-shadow mt-5 mb-5'>
          <Card.Img src={gradBG} height={400} alt='Card image' />
          <Card.ImgOverlay>
            <h2>our message</h2>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
              veritatis, qui repellendus saepe aliquam similique nobis possimus
              facere quam cumque magnam non sequi nostrum ratione reiciendis
              placeat, rem quas expedita.
            </Card.Text>
          </Card.ImgOverlay>
        </Card>

        <Card className='border-0 card-shadow mt-5 mb-5'>
          <Card.Img src={gradBG2} height={400} alt='Card image' />
          <Card.ImgOverlay>
            <h2>our mission</h2>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              veniam perspiciatis nesciunt voluptas id tenetur! Tenetur
              similique, minima omnis impedit atque consectetur eum expedita?
              Quia ipsum aperiam ut doloribus excepturi?
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </div>
  )
}

export default About
