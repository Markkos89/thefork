import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const OneCard = ({ resto }) => {
    return (
        <Card border="light" style={{ width: '18rem' }}>
            <Card.Body>
                <Container>
                    <Row>
                        <Col><Card.Img variant="top" src={`${resto.image_url}`} /></Col>
                        <Col>
                            <Card.Text>{resto.cuisine}</Card.Text>
                            <Card.Title>{resto.name}</Card.Title>
                            <Card.Text>{resto.address}</Card.Text>
                            <Card.Text>Precio promedio {resto.average_ticket}</Card.Text>
                            <Card.Text>{resto.takes_yums}</Card.Text>
                            <Card.Text>{resto.rating}</Card.Text>
                            <Card.Text>{resto.reviews}</Card.Text>
                            <Button variant="primary">RESERVAR - HASTA -%{resto.best_discount}</Button>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </Card.Body>
        </Card>
    )
}

export default OneCard
