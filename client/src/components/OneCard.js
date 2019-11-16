import React from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Container, Row, Col
} from 'reactstrap';
// import { FiMessageCircle } from 'react-icons/FiMessageCircle';

const OneCard = ({ resto }) => {
    return (
        <div>
            <Container>
                <Card>
                    <Row>
                        <Col xs={{ size: 'auto', offset: 1 }}><CardImg style={{ width: "318px", height: "180px" }} src={`${resto.image_url}`} alt="Card image cap" /></Col>
                        <Col>
                            <CardBody>
                                <CardSubtitle>{resto.cuisine}</CardSubtitle>
                                <CardTitle>{resto.name}</CardTitle>
                                <CardText>{resto.address}</CardText>
                                <CardText>Precio promedio $ {resto.average_ticket}</CardText>
                                <CardText>{resto.takes_yums}</CardText>

                                <Button variant="success">RESERVAR - HASTA -%{resto.best_discount}</Button>
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
};

export default OneCard

