import React, { Component } from "react";
import Cards from "./cards";
import Navbar from "./navbar";
import data from "../assets/data/cards.json";
import Carrusel from "./carrusel";
//import { Carousel } from "react-responsive-carousel";

class Home extends Component{
    state = {
        cards: data
    }
    render () {
        return (
            <div>
                <Navbar txtColor="txtColor1" />
                <Carrusel/>
                <h1 className="txt-title">Destination</h1>
                <Cards data={this.state.cards}/>
            </div>
            
        )
    }
    
}
export default Home;