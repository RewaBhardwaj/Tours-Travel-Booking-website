import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

const serviceData = [
  {
    icon: "ri-sun-foggy-fill",
    title: "Check Weather",
    desc: "Before travelling , know the weather of your desitnation."
  },

  {
    icon: "ri-chat-check-fill",
    title: "Great Reviews",
    desc: "Get Reviews for each tour before you plan a wonderful trip."
  },
  {
    icon: "ri-newspaper-fill",
    title: "Personalized Newsletter",
    desc: "We server personalized newsletter to get featured tours direclty in your mail"
  }
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
