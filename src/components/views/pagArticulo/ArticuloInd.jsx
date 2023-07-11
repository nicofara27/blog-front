import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';

const ArticuloInd = () => {
    return (
        <Col xs={8}>
            <div id='art__imgContainer'>
                <img src="https://kinsta.com/es/wp-content/uploads/sites/8/2020/10/tipos-de-archivos-de-imagen.png" alt="" className='art__img w-100 h-100'/>
            </div>
            <Row className='w-50 mt-2 align-items-center'>
                <Col>
                    <img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" alt="" className='w-100 h-100'/>
                </Col>
                <Col xs={6}>
                <h5 className='m-0'>Juan</h5>
                <p className='fs-7 m-0'>subido hace 1 dia</p>
                </Col>
                <Col>
                <i class="bi bi-pencil btn btn-primary py-0 px-1 me-1"></i>
                <i class="bi bi-trash btn btn-danger py-0 px-1"></i>
                </Col>
            </Row>
            <div className='mt-5'>
                <h1 className='fw-bolder'>Titulo de prueba</h1>
                <p className='mt-4 art__p'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint odit delectus laudantium distinctio? Consequuntur, labore dolores. Ea magnam eligendi quia. Tenetur assumenda, et provident odit iste cumque sit iure fugit sunt, alias dolorum architecto fugiat corporis velit nulla, hic repellat. Nihil, itaque libero aliquam ullam magni deleniti voluptas architecto explicabo, adipisci minima dignissimos ea expedita facere. Magnam facilis, aperiam officia porro ea atque, eius modi ex recusandae, repudiandae consectetur harum minima nobis quaerat autem laudantium. Cum quasi neque, dolores recusandae ratione quidem omnis, mollitia temporibus ipsa dolore hic! Incidunt repudiandae quae sequi mollitia cum omnis numquam temporibus tempora laborum odio.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint odit delectus laudantium distinctio? Consequuntur, labore dolores. Ea magnam eligendi quia. Tenetur assumenda, et provident odit iste cumque sit iure fugit sunt, alias dolorum architecto fugiat corporis velit nulla, hic repellat. Nihil, itaque libero aliquam ullam magni deleniti voluptas architecto explicabo, adipisci minima dignissimos ea expedita facere. Magnam facilis, aperiam officia porro ea atque, eius modi ex recusandae, repudiandae consectetur harum minima nobis quaerat autem laudantium. Cum quasi neque, dolores recusandae ratione quidem omnis, mollitia temporibus ipsa dolore hic! Incidunt repudiandae quae sequi mollitia cum omnis numquam temporibus tempora laborum odio.
                        
                </p>
            </div>
        </Col>
    );
};

export default ArticuloInd;