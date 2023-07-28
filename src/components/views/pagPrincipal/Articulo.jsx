import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Articulo = ({articulo}) => {
    return (
        <Row className='my-5 articulo'>
            <Col className='d-flex flex-column justify-content-between'>
            <h1 className='fw-bolder'>{articulo.titulo}</h1>
            <p>{articulo.texto}</p>
            <Button href={`/articulo/${articulo.id}`} variant="outline-primary">Ver mas</Button>
            </Col>
            <Col>
                <div className='articulo__imgContainer'>
                    <img className='articulo__img' src=	{articulo.img} alt={articulo.titulo} />
                </div>
            </Col>
        </Row>
    );
};

export default Articulo;