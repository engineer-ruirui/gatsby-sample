import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";
import { Link } from "gatsby";
import image from "../components/image";
import homeImg from "../images/home.jpg";
import jigyonaiyoImg from "../images/jigyo-naiyo.svg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Row style={{border:`solid green`, maxWidth:`960px`}}>
      <img src={homeImg} style={{width:`100%`, marginBottom:`2rem`}}></img>
    </Row>
    <Row>
      <Col xs={12} md={6} style={{border:`solid yellow`, maxWidth:`480px`}}>
        <Row>
          <Col style={{backgroundColor:`cornflowerblue`, color:`white`, padding: `0.5rem`}}>インフォメーション</Col>
        </Row>
        <Row>
          <Col style={{border:`solid 1px blue`, padding: `0.5rem`}}>インフォメーション①</Col>
        </Row>
        <Row>
          <Col style={{border:`solid 1px blue`, padding: `0.5rem`}}>インフォメーション①</Col>
        </Row>
        <Row>
          <Col style={{border:`solid 1px blue`, padding: `0.5rem`}}>インフォメーション①</Col>
        </Row>
        <Row>
          <Col style={{border:`solid 1px blue`, padding: `0.5rem`}}>インフォメーション①</Col>
        </Row>
        <Row>
          <Col style={{border:`solid 1px blue`, padding: `0.5rem`}}>インフォメーション①</Col>
        </Row>
      </Col>
      <Col xs={12} md={6} style={{border:`solid yellow`, maxWidth:`480px`}}>
        <Row>
          <Col style={{backgroundColor:`cornflowerblue`, color:`white`, padding: `0.5rem`}}>IR情報</Col>
        </Row>
        <Row>
          <Col style={{border:`solid 1px brown`, padding: `0.5rem`}}>IR情報</Col>
        </Row>
        <Row>
          <Col style={{border:`solid 1px purple`, padding: `0.5rem`}}>社長ブログ</Col>
        </Row>
        <Row>
          <Col style={{border:`solid 1px purple`, padding: `0.5rem`}}>広告スペース</Col>
        </Row>
        <Row>
          <Col style={{border:`solid 1px purple`, padding: `0.5rem`}}>広告スペース</Col>
        </Row>
      </Col>
    </Row>
    <Row>
      <Col style={{backgroundColor:`cornflowerblue`, color:`white`, padding: `0.5rem`, maxWidth:`960px`, marginTop:`2rem`}}>
        事業内容
      </Col>
    </Row>
    <Row>
      <Col style={{border: `solid lime`, maxWidth:`960px`}}>
        <Row>
          <Col md={4}>
            <Card style={{marginTop:`1rem`}}>
              <Card.Img variant="top" src={jigyonaiyoImg} />
              <Card.Body>
                <Card.Title>事業内容１</Card.Title>
                <Card.Text>
                  サンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルです
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{marginTop:`1rem`}}>
              <Card.Img variant="top" src={jigyonaiyoImg} />
              <Card.Body>
                <Card.Title>事業内容２</Card.Title>
                <Card.Text>
                  サンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルです
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card style={{marginTop:`1rem`}}>
              <Card.Img variant="top" src={jigyonaiyoImg} />
              <Card.Body>
                <Card.Title>事業内容２</Card.Title>
                <Card.Text>
                  サンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルですサンプルです
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Col>
    </Row>
    <Row>
      <Col style={{maxWidth:`960px`, paddingTop:`3rem`, border:`solid silver`}}>余白</Col>
    </Row>
  </Layout>
);

export default IndexPage;
