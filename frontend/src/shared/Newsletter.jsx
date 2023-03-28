import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
//Reactstrap is a component library for react.js.
//It contains a set of reusable components used in react applications, also used to create responsive websites.
import maleTourist from '../assets/images/male-tourist.png'
const NewsLetter = () => {
  return (
    <section className="newsletter">
        <Container>
            <Row>
                <Col lg='6'>
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful traveling information.</h2>
                        <div className="newsletter__input">
                            <input type="email" placeholder='Enter your email'/>
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>
                        <p>Join our newsletter and discover new destinations to inspire the traveler within.Every week you’ll receive expert advice, tips, exclusive offers, and much more</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt=""/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default NewsLetter