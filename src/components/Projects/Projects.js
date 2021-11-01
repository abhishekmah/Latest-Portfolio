import React, { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import chatify from "../../Assets/Projects/hotel.png";
import leaf from "../../Assets/Projects/angel.png";
import editor from "../../Assets/Projects/glamm.png";
import tumblr from "../../Assets/Projects/tumblr.png";
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
          <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={tumblr}
              isBlog={false}
              title="Tumblr Clone"
              description="Tumblr is an American microblogging and social networking website founded in 2007."
              link="https://github.com/abhishekmah/Tumblr-Project"
              linkmedium="https://medium.com/@mahatoabhishek123/tumblr-com-a-cloned-version-49e9d2391dca"
              linklive="https://tumblrclone.netlify.app/"
            />
          </Col>
          
          <Col md={5} className="project-card" data-aos="fade-right">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Hotels Clone "
              description="Hotels.com is a leading provider of hotel accommodation worldwide, offering booking services through localized websites."
              link="https://github.com/abhishekmah/Project-Hotels.com"
              linkmedium="https://medium.com/@mahatoabhishek123/hotels-com-a-cloned-version-57165d6eef3f"
              linklive="https://hotelsclone.netlify.app"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-up">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="AngelList Clone"
              description="AngelList is a U.S. website for startups, angel investors, and job-seekers looking to work at startups."
              link="https://github.com/vshubhams/project-angel"
              linkmedium="https://medium.com/@mahatoabhishek123/a-cloned-version-of-angel-co-d7718733313c"
              linklive="https://projectangel.netlify.app"
            />
          </Col>

          <Col md={5} className="project-card" data-aos="fade-down">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="My Glamm Clone"
              description="MyGlamm is a direct-to-consumer beauty brand that offers an online beauty products marketplace."
              link="https://github.com/tauseef-stack/myGlamm"
              linkmedium="https://medium.com/@mahatoabhishek123/myglamm-com-a-cloned-version-703f06e7e9cf"
              linklive="https://myglammclone.netlify.app"
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
