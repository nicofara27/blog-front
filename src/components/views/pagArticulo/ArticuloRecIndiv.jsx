import React from 'react';
import { Button } from 'react-bootstrap';

const ArticuloRecInd = () => {
    return (
        <article className='mb-4'>
            <div>
                <img src="https://kinsta.com/es/wp-content/uploads/sites/8/2020/10/tipos-de-archivos-de-imagen.png" alt="" className='w-100'/>
            </div>
            <h6 className='fw-bolder'>Titulo prueba</h6>  
            <Button className='fs-7 py-0 px-1 w-100' variant='outline-primary'>Ver mas</Button>
        </article>
    );
};

export default ArticuloRecInd;