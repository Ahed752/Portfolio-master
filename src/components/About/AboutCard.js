import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahed Memas </span>
            from <span className="purple"> Montreal, Canada.</span>
            <br />
            <br />
            Motivated Software Engineer with hands-on experience in web development, data modelling,and collaborative problem-solving. Skilled at delivering efficient, user-focused solutions andeager to contribute to impactful projects in a dynamic team environment.
            <br />
            I have completed My Bachelor's in Software Engineering at Concordia University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Watching Movies and Series
            </li>
            <li className="about-activity">
              <ImPointRight /> Working Out
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
