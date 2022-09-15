import React from "react";
import { Helmet } from "../components/Helmet/Helmet";
import { FindCarForm } from "../components/UI/FindCarForm";
import { HeroSlider } from "../components/UI/HeroSlider";

import '../styles/FindCarForm.css'

import { Container, Row, Col } from "reactstrap";
import { AboutSection } from "../components/UI/AboutSection";
import { ServiceList } from "../components/UI/ServiceList";

export const Home = () => {
  return (
    <Helmet title="Home Page">
      <section className="p-0 hero__slider-selection">
        <HeroSlider />

        <div className="hero__form">
          <Container>
            <Row className="form__row">
              <Col lg="4" md="4">
                <div className="find__cars-left">
                  <h2>Find your best car here</h2>
                </div>
              </Col>

              <Col lg="8" md="8" sm="12">
                <FindCarForm />
              </Col>
            </Row>
          </Container>
        </div>
      </section>

      <AboutSection />

      <section>
        <Container>
          <Row>
            <Col lg='12' className="mb-5 text-center">
            <h6 className="section__subtitle">See our</h6>
            <h2 className="section__title">Popular Services</h2>
            <ServiceList />
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
