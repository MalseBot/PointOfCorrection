import React, { useState } from 'react'
import Products from '../Products'
import { Container, Button, Card, Badge, Carousel } from 'react-bootstrap'
import data from '../Product data'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'bootstrap/dist/css/bootstrap.css'
import aboutIMG from '../imgs/about_us.jpg'
import contactIMG from '../imgs/contact-pic.jpg'
import '../App.css'

function Home() {
  const [index, setIndex] = useState(0)

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex)
  }
  return (
    <div className=' h-100 '>
      <div className='main-pic d-flex justify-content-end align-items-center top-shadow'>
        <h1 style={{ fontSize: 90 }} className='me-5 text-light text-uppercase'>
          Tech is within
        </h1>
      </div>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className='mt-5 rounded-1'
        style={{ height: 250 }}
      >
        <Carousel.Item>
          <a href='https://store.acer.com/en-us/nitro-sale' target='blank'>
            <img
              className='d-block w-100'
              src='https://static-ecpa.acer.com/media/wysiwyg/AcerUS_23Q1_eComm_W15_Nitro_1320X220.jpg'
              alt='First slide'
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://us.msi.com/Promotion/rankup2023'>
            <img
              className='d-block w-100 '
              src='https://storage-asset.msi.com/us/picture/banner/banner_1680711807b3a2eef11eef089c2d89eb341a8a7690.jpeg'
              alt='Second slide'
              height={250}
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href='https://www.lenovo.com/us/en/d/gaming-pc-bundle/?orgRef=https%253A%252F%252Fsearch.brave.com%252F'>
            {' '}
            <img
              className='d-block w-100'
              src='https://p1-ofp.static.pub/ShareResource/na/dlp/heros/medium/lenovo-pc-gaming-accessories-full-desktop.jpg'
              alt='Third slide'
            />
            <Carousel.Caption>
              <p className='text-uppercase fw-bold'>
                best bundles and deals for great gaming experiance
              </p>
            </Carousel.Caption>
          </a>
        </Carousel.Item>
      </Carousel>
      <Container fluid='md'>
        <Card className='text-white mb-5 mt-5 border-0 position-relative card-shadow'>
          <Card.Img src={aboutIMG} alt='Card image' className='h-min' />
          <Card.ImgOverlay className=''>
            <h2>About us</h2>
            <Card.Text className='w-50p w-100-sm'>
              we have the best prices with a insurense up to <br />
              <Badge className='text-secondary text-uppercase fw-bold'>
                {' '}
                5 years
              </Badge>
              , products tested to preforme perfectly for gaming and work.
            </Card.Text>
            <Button
              className='text-uppercase fw-bold bg-success border-0 position-absolute bottom-0 mb-3'
              variant='outline-light'
              href='./About.jsx'
            >
              learn more
            </Button>
          </Card.ImgOverlay>
        </Card>
      </Container>
      <div>
        <h2 className='border-bottom border-success pb-1 m-3 text-success'>
          Popular Products
        </h2>
        <Swiper
          breakpoints={{
            480: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 2,
            },
            901: {
              slidesPerView: 3,
            },
            1200: {
              slidesPerView: 4,
            },
          }}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
          className='text-white mt-3 mb-3 '
        >
          {data.map((data) => {
            return (
              <SwiperSlide className=''>
                <Products key={data.id} {...data}></Products>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <Container fluid='md'>
        <Card className=' text-info h-fitcontent card-shadow border-0 mt-5 mb-5 position-relative '>
          <Card.Img src={contactIMG} height='400' alt='Card image' />
          <Card.ImgOverlay>
            <Card.Text>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Temporibus voluptatem, magnam a aspernatur, animi soluta id
              accusamus perspiciatis provident nemo voluptates fugit quos
              perferendis atque repudiandae natus itaque quam vel aliquam quis!
              Placeat atque id voluptatum quas culpa eaque sit reiciendis
              possimus ducimus. Sunt numquam suscipit nobis voluptatibus rem
              possimus!
            </Card.Text>
            <Button
              variant='outline-light'
              className='text-uppercase fw-bold bg-success border-0 position-absolute bottom-0 mb-3'
              href='./Contact.jsx'
            >
              learn More
            </Button>
          </Card.ImgOverlay>
        </Card>
      </Container>
    </div>
  )
}

export default Home
