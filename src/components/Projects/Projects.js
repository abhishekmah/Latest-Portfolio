import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import leaf from "../../Assets/Projects/Indegogo.PNG";
import editor from "../../Assets/Projects/Bluemercurry.PNG";
import chatify from "../../Assets/Projects/Agoda.PNG";
import Aos from "aos";
import "aos/dist/aos.css";
function Projects() {
  useEffect(() => {
    Aos.init({ duration: 1200 });
  });

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading" data-aos="fade-right">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }} data-aos="fade-up">
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Agoda Clone "
              description="Agoda is an online travel agency and metasearch engine for hotels, vacation rentals, flights, and airport transfer. It was founded in 2003 and later acquired by Booking Holdings, becoming a subsidiary of the company."
              link="https://github.com/Avinash7564/Agoda-Clone"
              linkmedium="https://avinashrexx.hashnode.dev/cloning-of-agoda-website"
              linklive="https://agoda.netlify.app/"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Indiegogo Clone"
              description="Indiegogo is a website which offers two types of functionalities Donation and Fund-Raising. If anyone have any creative idea then he/she can fill a form and get a donation from any users if anyone likes their ideas. "
              link="https://github.com/Avinash7564/indiegogo-clone"
              linkmedium="https://avinashrexx.hashnode.dev/indiegogo-clone"
              linklive="https://indiegogo-clone.netlify.app"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Bluemercurry Clone"
              description="A cloned web application of bluemercury.com, a US-based website that sells cosmetics products and provides a wide range of products to choose from"
              link="https://github.com/Avinash7564/bluemercurry_clone"
              linkmedium="https://avinashrexx.hashnode.dev/bluemercury-website-cloning"
              linklive="https://bluemercurryclone.netlify.app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;