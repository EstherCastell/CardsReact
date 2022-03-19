import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ico/logojapones.png"

class Navbar extends Component{
    render() {
        return (
            <div class="ct-header">
                <Link to= "/"><img className="img-logo" src={ logo } alt="logo"/></Link>
                <Link to="/create" className={ this.props.txtColor }>Create / Edit</Link>
            </div>
        )
    }
}
export default Navbar;