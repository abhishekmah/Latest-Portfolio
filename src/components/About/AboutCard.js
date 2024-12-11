import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Abhishek Mahato </span>
            a passionate <span className="purple">Software Developer</span> currently working at <span className="purple"> Shiprocket Pvt. Ltd.</span>
            {/* from <span className="purple"> Jamshedpur, Jharkhand, India.</span> */}
            <br /> 
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling & exploring wildlife.
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Table Tennis, Football, Cricket in my leisure time.
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Abhishek</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
