import React from 'react';
import Articulo from './pagPrincipal/Articulo';
import { Container } from 'react-bootstrap';

const PagPrincipal = () => {
    return (
        <main className='py-4'>
            <Container>
            <Articulo />
            </Container>
        </main>
    );
};

export default PagPrincipal;