import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'
import './../index.css';

import { TourSearch } from './TourSearch'

const home_img = require('./../images/home.jpg');

const homeImg = { backgroundImage: `url(${home_img})` }

export class Home extends Component {

    constructor(props) {
        super(props);

    }

    componentDidMount() {
        const myJumbotronStyle = {
            newJumbotronImg: homeImg,
            newHeaderStyle: { color: "red", textAlign: "center" ,opacity:"0.5"},
            newHeaderText: "Welcome Home"
        }

        this.props.loadJumbotronStyle(myJumbotronStyle)
    }



    render() {

        const HomeHTML = (
            <div className="body" style={{ marginTop: "80px" }}>
                <TourSearch />
            </div>
        );
        return (
            HomeHTML
        );
    }
}

