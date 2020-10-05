import React from 'react';
import { Container } from 'react-bootstrap';

export default function Contact() {
    return (

        <Container className='contact' fluid id="contact" >
            <div><h3>&sdot;
                <a href="mailto:name@email.com" target="_blank" rel="noopener noreferrer"> E-mail &sdot;</a>
                <a href="https://wa.me/+573175132529" target="_blank" rel="noopener noreferrer"> Whatsapp &sdot;</a>
                <a href="https://www.facebook.com/absencerecords" target="_blank" rel="noopener noreferrer"> Facebook &sdot;</a>
                <a href="https://www.instagram.com/absencerecs" target="_blank" rel="noopener noreferrer"> Instagram &sdot;</a>
                <a href="https://www.soundcloud.com/absence-records" target="_blank" rel="noopener noreferrer"> SoundCloud &sdot;</a></h3>
            </div>
        </Container>

    )
}