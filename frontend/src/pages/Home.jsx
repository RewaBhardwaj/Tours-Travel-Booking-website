import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";
import Subtitle from "../shared/Subtitle";
import worldImg from "../assets/images/world.png";
import SearchBar from "../shared/SearchBar";
import ServicesList from "../services/ServicesList";

const Home = () => {
  return ( <>
    {/* // Hero section start */}
    <section>
      <Container>
        <Row>
          <Col lg="6">
            <div className="hero__content">
              <div className="hero__subtitle d-flex align-items-center">
                <Subtitle subtitle={'Know Before You Go'} />
                <img src={worldImg} alt="" />
              </div>
              <h1>
                Travelling opens the door for creating
                <span className="highlight"> Memories </span>
              </h1>
              <p>
                Advenista, an online travel booking website that allows  to
                search and book travel related services like hotels and best
                possible ways to reach out that particular country.Being India's
                 leading website for hotel and holiday bookings, 
                 Advenista helps you book hotels 
                 that are affordable and customized to your trips
                  <br></br> 
              </p>
            </div>
          </Col>

          <Col lg='2'>
            <div className="hero__img-box">
            <img src={heroImg} alt="" />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-4">
            <video src={heroVideo} alt="" controls />
            </div>
          </Col>
          <Col lg='2'>
            <div className="hero__img-box mt-5">
            <img src={heroImg02} alt="" />
            </div>
          </Col>
          
          <SearchBar/>
        </Row>
      </Container>    
    </section>

    <section>
      <Container>
        <Row>
          <Col lg='3'>
            <h5 className="services__subtitle">What we serve</h5>
            <h2 className="services__title">We offer our best services</h2>


          </Col>
          <ServicesList />
        </Row>
      </Container>
    </section>
    </>

    

  
    
  );
};

export default Home;
 