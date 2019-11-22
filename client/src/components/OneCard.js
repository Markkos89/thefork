import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';
import { useMediaQuery } from 'react-responsive'

const OneCard = ({ resto }) => {
    const isDesktopOrLaptop = useMediaQuery({ query: '(min-device-width: 1224px)' })

    if (isDesktopOrLaptop) {
        return (
            <div>
                <Container>
                    <Card>
                        <Row>
                            <Col xs={{ size: 'auto' }}><CardImg style={{ width: "318px" }} src={`${resto.image_url}`} alt="Card image cap" /></Col>
                            <Col>
                                <CardBody>
                                    <CardSubtitle><h5>{resto.cuisine}</h5></CardSubtitle>
                                    <CardTitle><h2>{resto.name}</h2></CardTitle>
                                    <CardText>{resto.address}</CardText>
                                    <CardText>Precio promedio $ {resto.average_ticket}</CardText>
                                    <CardText>{resto.takes_yums}</CardText>

                                    <Button color="success">RESERVAR - HASTA -%{resto.best_discount}</Button>
                                </CardBody>
                            </Col>
                            <Col>
                                <CardText>{resto.rating}</CardText>
                                <CardText>{resto.reviews}</CardText>
                            </Col>
                        </Row>
                    </Card>
                </Container>
            </div>
        );
    } else {
        return (
            <Card>
                <Row>
                    <Col><CardImg style={{ width: "100vw" }} src={`${resto.image_url}`} alt="Card image cap" /></Col>
                </Row>
                <Row>
                    <Col xs={"10"}>
                        <CardBody>
                            <CardSubtitle><h5>{resto.cuisine}</h5></CardSubtitle>
                            <CardTitle><h3>{resto.name}</h3></CardTitle>
                            <CardText>{resto.address}</CardText>
                            <CardText>Precio promedio $ {resto.average_ticket}</CardText>
                            <CardText>{resto.takes_yums}</CardText>
                        </CardBody>
                    </Col>
                    <Col style={{ verticalAlign: "middle" }}>
                        <CardText>{resto.rating}</CardText>
                        <CardText>{resto.reviews}</CardText>
                    </Col>
                </Row>
                <Row>
                    <Button color="success" style={{ width: "100vw" }}>RESERVAR - HASTA -%{resto.best_discount}</Button>
                </Row>
            </Card>
        );
    }
};

export default OneCard

