import React, { Component } from 'react';


import styles from './underConstruction.module.css';


const aboutUs_img = require('./../images/about_us.jpg');

const aboutUsImg = { backgroundImage: `url(${aboutUs_img})` }


export class AboutUs extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const myJumbotronStyle = {
            newJumbotronImg: aboutUsImg,
            newHeaderStyle: { color: 'darkblue', textAlign: "left" },
            newHeaderText: "Our Team ..."
        }

        this.props.loadJumbotronStyle(myJumbotronStyle)
    }

    render() {

        const _aboutUs = (
            <div className={styles.img}>
                              
            </div >
        );
        return (
            _aboutUs
        );
    }
}

