import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import PostLayout,{withPostLayout} from "../../components/PostLayout";
import {PostText} from "../../components/PostText";
 
function About() {
    return <PostLayout          
    >
        <Container fluid="md">
        <Row>
             <Col>
                 <PostText  text={[
                     {text:'This is  Frank.', speak:true, title:true},
                     {text:'He\'s having some troubles.', speak:true},
                     {text:'Let\'s help Frank to find the solutions.', speak:true},
                 ] } />
             </Col>
            <Col>
                <img width="640" height="480" src={`${process.env.BACKEND_URL}/images/frank.svg`} alt="Italian Trulli"/>
            </Col>
        </Row>
    </Container>
    </PostLayout>
}

export default withPostLayout(About);
 