import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const Articulo = () => {
    return (
        <Row className='my-5 articulo'>
            <Col className='d-flex flex-column justify-content-between '>
            <h1 className='fw-bolder'>Titulo de articulo</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam maiores nulla sunt labore consequuntur tempora officiis ut minus in, voluptatum quaerat dolore nobis ex rem corporis odit vero, recusandae iure. Officiis expedita vel aut quibusdam sequi. Nam distinctio quam neque dolore! Voluptates adipisci quasi aliquam est autem non architecto at.</p>
            <Button href='/articulo/asd' variant="outline-primary">Ver mas</Button>
            </Col>
            <Col>
                <div className='articulo__imgContainer'>
                    <img className='articulo__img' src="https://kinsta.com/es/wp-content/uploads/sites/8/2020/10/tipos-de-archivos-de-imagen.png" alt="" />
                </div>
            </Col>
        </Row>
    );
};

export default Articulo;