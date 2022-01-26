import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
//import "react-responsive-carousel/lib/styles/carousel.min";
import barrio from "../assets/img/barrio.jpg";
import coctel from "../assets/img/coctel.jpg";
import Rutas from "../assets/img/Rutas.jpg";
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';

class Carrusel extends Component {
    render () {
    return (
        <Carousel>
        <div>
            <img src={barrio} alt="barrio"/>
        </div>
        <div>
            <img src={coctel} alt="coctel"/>
        </div>
        <div>
            <img src={Rutas} alt="Rutas"/>
        </div>
        </Carousel>
    );
}
}
export default Carrusel;