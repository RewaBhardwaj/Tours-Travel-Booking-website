import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";
import weatherImg from "../assets/images/weather.png";
import guideImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const serviceData = [
  {
    imgUrl: weatherImg,
    title: "Calculate Weather",
    desc: "Before travelling , know the weather of your desitnation.",
  },

  {
    imgUrl: guideImg,
    title: "Best Tour Guide",
    desc: "Get the best tour guides , offers from our website!",
  },
  {
    imgUrl: customizationImg,
    title: "Customization",
    desc: "You will get a chance to customize the hotel rooms.",
  },
];

const ServicesList = () => {
  return (<>
    {
        serviceData.map((item,index)=> (
        <Col lg="3" key={index}>
        <ServiceCard item={item} />

        </Col>
        ))}
    
  </>
);
};
export default ServicesList;
