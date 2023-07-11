import React from 'react';
import ArticuloInd from './pagArticulo/ArticuloInd';
import ArticulosRec from './pagArticulo/ArticulosRec';
import { Container } from 'react-bootstrap';

const PagArticulo = () => {
    return (
        <main>
            <Container className='d-flex justify-content-between'>
            <ArticuloInd/>
            <ArticulosRec/>
            </Container>
        </main>
    );
};

export default PagArticulo;