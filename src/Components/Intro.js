import React from 'react';
import Typed from 'react-typed';
import { Container } from 'react-bootstrap';

export default function Intro() {
    return (
        <Container className={'intro'} fluid>
            <h1>&sdot; <Typed
                strings={["Absence Recs.", "Halloween Pool Party", '31.10.2020', 'Viotá, Cundinamarca']}
                typeSpeed={60}
                backSpeed={50}
                loop /> &sdot;</h1>
        </Container>
    )
}