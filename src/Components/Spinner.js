import React from 'react';
import { Container } from 'react-bootstrap';
import '../App.css';

const Spinner = () => {
    return (
        <Container className="text-center" id="loading">
            <div class="lds-facebook"><div></div><div></div><div></div></div>
        </Container>
    )
};

export default Spinner;