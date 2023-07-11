import React from 'react';
import { Col } from 'react-bootstrap';
import ArticuloRecInd from './ArticuloRecInd';

const ArticulosRec = () => {
    return (
        <Col className='ms-5'>
        <h4 className='fw-bolder'>Otros articulos que te pueden interesar</h4>
           <ArticuloRecInd></ArticuloRecInd> 
           <ArticuloRecInd></ArticuloRecInd> 
           <ArticuloRecInd></ArticuloRecInd> 
        </Col>
    );
};

export default ArticulosRec;