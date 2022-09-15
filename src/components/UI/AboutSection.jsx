import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/AboutSection.css";

export const AboutSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section_subtitle">About Us</h4>
              <h2 className="section__title">Welcome to car rent service</h2>
              <p className="section_desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
                architecto accusantium deserunt dolor vel obcaecati quod
                officiis ipsum officia odit cumque veritatis sunt nisi molestias
                velit assumenda cum, dolore porro necessitatibus. Amet,
                consequuntur iste cupiditate nam iusto soluta. Reiciendis
                repellendus excepturi minus!
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section_desc d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem, ipsum dolor
                  sit amet consectetur adipisicing.
                </p>

                <p className="section_desc d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem, ipsum dolor
                  sit amet consectetur adipisicing.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section_desc d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem, ipsum dolor
                  sit amet consectetur adipisicing.
                </p>

                <p className="section_desc d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Lorem, ipsum dolor
                  sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="about__img">
              <img
                src="https://www.motortrend.com/uploads/sites/10/2019/09/2019-bmw-m5-competition-sedan-angular-front.png?fit=around%7C875:492.1875"
                alt="bmw e60 m5"
                className="w-100"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
