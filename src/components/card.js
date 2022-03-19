import React, { Component } from "react";
//import star from "../assets/ico/star.png";
import eye from "../assets/ico/eye.png";
import edit from "../assets/ico/edit.png";
import del from "../assets/ico/delete.png"
import heart from "../assets/ico/heart.png"

class Card extends Component{
    render() {
        return (
            <div>
                <div className="ct-card">
                    <div className="ct-card-img">
                        <img className="img-card" src={require(`../assets/img/${ this.props.imgURL}.jpg`).default} alt={this.props}/>
                    </div>
                    <div className="ct-card-info">
                        <div className="ct-icons">
                            <div className="ct-icons-like">
                                {/* <button className="bt-ico"><img className="img-ico" src= {star} alt= "star value button"/></button> */}
                                <button className="bt-ico"><img className="img-ico" src= {heart} alt= "love button"/></button>
                                <a className="bt-ico" href="/beach"><img className="img-ico" src= {eye} alt= "show button"/></a>          
                            </div>
                            <div className="ct-icons-modify">
                            <a className="bt-ico" href="/create"><img className="img-ico" src= {edit} alt= "edit button"/></a>
                            <button className="bt-ico"><img className="img-ico" src= {del} alt= "delete button"/></button>
                            </div>
                        </div>
                        <div className="ct-txt">
                            <h6 className="txt-card-title">{this.props.imgName}</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Card;