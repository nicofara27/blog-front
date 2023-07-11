import React from 'react';
import Articulo from './pagPrincipal/Articulo';
import { Container } from 'react-bootstrap';

const PagPrincipal = () => {
    return (
        <main>
            <Container>
            <Articulo/>
            <Articulo/>
            </Container>
        </main>
    );
};

export default PagPrincipal;