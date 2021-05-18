import React from "react";
import Post from "../Post";
import  {Container,Row, Col} from "react-bootstrap";

export default function About() {
    return <Container fluid="md">
        <Row>
        <Col>
            <div>
                <span className={"center align-center"}><h1 className="minor align-center">This is  Frank. </h1></span>
                <span ><h3>He's having some troubles.</h3></span>
                <span ><h3 >Let's help Frank to find the solutions.</h3></span>
            </div>
        </Col>
        <Col>
            <img width="640" height="480" src={'static/images/frank.svg'} alt="Italian Trulli"/>
        </Col>
        </Row>
    </Container>

}
 