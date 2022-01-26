import React, { Component } from "react";
import Navbar from "./navbar";

class Create extends Component {
    render() {
        return (
            <div>
                <Navbar txtColor="txtColor2" />
                <h2 className="txt-title">Create</h2>
                <div className="ct-create">
                    <select placeholder="choose one">
                        <option selected value="Choose"></option>
                        <option value="Beach">Beach</option>
                        <option value="City">City</option>
                        <option value="Mountain">Mountain</option>
                        <option value="Town">Town</option>
                    </select>
                    <form>
                            <label>
                                <input className="input"type="text" name="name" placeholder="Title" />
                            </label>
                        </form>
                        <form>
                            <label>
                                <input className="input" type="text" name="name" placeholder="Image" />
                            </label>
                            <input type="file" />
                    </form>
            <   input type="submit" value="Submit" />
            </div>
            </div>
        )
    }
}
export default Create;