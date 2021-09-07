import { Button,Container,Row,Col,Image } from 'react-bootstrap';
import './App.css';
import ELImg from './Assets/ELImg.jpg'
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile
} from "react-device-detect";


function App() {
  
  
  return (
    <>
      <BrowserView>
      <Container fluid className="ep-Banner">
        <Row className="ep-Banner-text">
          <div className="fix">
          <h1>Experiential Learning</h1><br/>
          <p>Learning has no boundaries. There is always there to
             learn on different topics and gain knowledge. Now it can
              be of various types of them is experiential learning. Let's hear about it.
          </p>
          </div>
        </Row>
      </Container>
      <Container className="ep-Intro">
      <Row className="ep-Intro-text">
        <p>Experiential learning is the procedure where students learn
           by having experience. In short, it is an opportunity where a
            student engages creatively, intellectually, emotionally, physically,
             or socially. It helps the students to have a quick decision-making ability
              whenever there is a problem, having a capacity for thinking critically, which 
              also helps in lifelong learning.
        </p>
      </Row>
      </Container>
      <Container fluid>
      <Row className="ep-section" >
        <Image src={ELImg} className="ep-section-img"></Image>
        <p>The father of experiential learning is David Kolb, 
          who made a four-stage model of it. It is a presentation
           of the approach. The four-stage model is:<br/>
        1) Concrete Experience<br/>
        2) Reflective Observation<br/>
        3) Abstract Conceptualization<br/>
        4) Active Experimentation
        </p>
      </Row>
      </Container> 
      
      <Row className="ep-Use" >
        <p><b>
        According to Kolb, the founders of the approach are John Dewey, Kurt Lewin and Jean Piaget.

        Some of the usefulness of Experiential learning are:-</b><br/>
        Students gain the ability to be more creative and put their innovative ideas.
        An opportunity to reflect on the outcome of their work.
        They can understand the concepts in a more advanced manner.
        The mistakes made by them help them to grow more and enhance themselves.

        As you know, every coin has two sides there are disadvantages too some are:
        Teachers or leaders always don’t have the patience to guide the students.
        Sometimes students have more than one answer that creates chaos.
        If a student has no task to work on,they might lose concentration.

        So,in the end, it shows that experiential learning is beneficial for all the students out there. Teachers should be more careful and patient while teaching the students so that the urge for studying doesn’t fade away.


        </p>
      </Row>
      </BrowserView>
      <MobileView>
      <Container fluid>
      <Row className="ep-section" >
        <Image src={ELImg} className="ep-section-img"></Image>
        <p>The father of experiential learning is David Kolb, 
          who made a four-stage model of it. It is a presentation
           of the approach. The four-stage model is:<br/>
        1) Concrete Experience<br/>
        2) Reflective Observation<br/>
        3) Abstract Conceptualization<br/>
        4) Active Experimentation
        </p>
      </Row>
      </Container> 
      
      <Row className="ep-Use" >
        <p><b>
        According to Kolb, the founders of the approach are John Dewey, Kurt Lewin and Jean Piaget.

        Some of the usefulness of Experiential learning are:-</b><br/>
        Students gain the ability to be more creative and put their innovative ideas.
        An opportunity to reflect on the outcome of their work.
        They can understand the concepts in a more advanced manner.
        The mistakes made by them help them to grow more and enhance themselves.

        As you know, every coin has two sides there are disadvantages too some are:
        Teachers or leaders always don’t have the patience to guide the students.
        Sometimes students have more than one answer that creates chaos.
        If a student has no task to work on,they might lose concentration.

        So,in the end, it shows that experiential learning is beneficial for all the students out there. Teachers should be more careful and patient while teaching the students so that the urge for studying doesn’t fade away.


        </p>
      </Row>
    </MobileView>
    </>
  );
}

export default App;
