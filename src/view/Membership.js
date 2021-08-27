import React, { Component } from 'react';

import style from './../styles.module.css'
import styles from './underConstruction.module.css';


const membership_img = require('./../images/membership.jpg');

const membershipImg = { backgroundImage: `url(${membership_img})` }


export class Membership extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const myJumbotronStyle = {
            newJumbotronImg: membershipImg,
            newHeaderStyle: { color: 'darkblue', textAlign: "center" },
            newHeaderText: "Join our Memebership Rewards Scheme"
        }

        this.props.loadJumbotronStyle(myJumbotronStyle)

    }

    render() {

        const _memebership = (
            <div className={styles.img}>
                              
            </div >
       );
        return (
            _memebership
        );
    }
}

