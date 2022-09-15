import React from "react";
import "../../styles/ServiceList.css";
import { Col } from "reactstrap";
import { seviceData } from "../../assets/data/serviceData";

export const ServiceList = () => {
  return (
    <div className="d-flex flex-wrap">
      {seviceData.map((item, id) => (
        <ServiceItem item={item} key={id} />
      ))}
    </div>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg="4" md="4" sm="6" className="mb-3">
    <div className="service__item">
      <span className="mb-3 d-inline-block">
        <i className={item.icon}></i>
      </span>
      <h6>{item.title}</h6>
      <p className="section__desc">{item.desc}</p>
    </div>
  </Col>
);
