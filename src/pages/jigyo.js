import React from "react";
import { Col, Row, Card } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import jigyo1Img from "../images/jigyo1.img";
import jigyo2Img from "../images/jigyo2.img";
import jigyo3Img from "../images/jigyo3.img";

const JigyoPage = () => (
  <Layout>
    <SEO title="事業内容" />
    <Row>
      <Col className="space"></Col>
    </Row>
    <Row>
      <Col className="title-obi">
        <h1 className="h1-font">事業内容</h1>
      </Col>
    </Row>
    <Row>
      <Col className="space"></Col>
    </Row>
    <Row>
      <Col md={6}>
        <Card style={{marginTop:`1rem`}}>
          <Card.Img variant="top" src={jigyo1Img}>
            <Card.Body>
              <Card.Title>軌道上デブリ除去</Card.Title>
              <Card.Text>
                サンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルです
              </Card.Text>
            </Card.Body>
          </Card.Img>
        </Card>
      </Col>

      <Col xs={12} md={6}>
        <Card style={{marginTop:`1rem`}}>
          <Card.Img variant="top" src={jigyo2Img}>
            <Card.Body>
              <Card.Title>テレポーテーションゲート開設</Card.Title>
              <Card.Text>
                サンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルです
              </Card.Text>
            </Card.Body>
          </Card.Img>
        </Card>
      </Col>
      <Col xs={12} md={6}>
        <Card style={{marginTop:`1rem`}}>
          <Card.Img variant="top" src={jigyo3Img}>
            <Card.Body>
              <Card.Title>量子力学による量子コントロール</Card.Title>
              <Card.Text>
                サンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルです
              </Card.Text>
            </Card.Body>
          </Card.Img>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col className="space"></Col>
    </Row>
  </Layout>
);

export default JigyoPage;
