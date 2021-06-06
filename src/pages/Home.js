import React from "react";
import Menu from "../components/layout/Menu";
import { Row,Col,Container} from "react-bootstrap";


export const Home = () => {
  return (
    <Row className="p-16">
      <Container>
      <Col xs={12} sm={12}>
        <Menu />
      </Col>
      </Container>
    </Row>
  );
};
export default Home;
