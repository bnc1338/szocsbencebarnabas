import React from "react";
import { Component } from "react";
import "./Portofolio.css";

class Portofolio extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <div className="Portofolio">
                <h2>Freelancing Jobs</h2>
                <div className="list">
                    <div className="job">
                        <h4><a style={{textDecoration:"none", color:"rgb(98, 98, 98)"}} href="https://team7percent.onrender.com">www.7percentteam.com</a></h4>
                        <h5>2023</h5>
                    </div>
                    <div className="job">
                        <h4><a style={{textDecoration:"none", color:"rgb(98, 98, 98)"}} href=" ">?</a></h4>
                        <h5>2023</h5>
                    </div>
                </div>
            </div>
        );
    }

}

export default Portofolio;