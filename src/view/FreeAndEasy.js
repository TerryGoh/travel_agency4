import React, { Component } from 'react';


import style from './../styles.module.css'
import styles from './underConstruction.module.css';


const free_n_easy_img = require('./../images/free_n_easy.jpg');

const free_n_easyImg = { backgroundImage: `url(${free_n_easy_img})` };

export class FreeAndEasy extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const myJumbotronStyle = {
            newJumbotronImg: free_n_easyImg,
            newHeaderStyle: {color: 'darkblue', textAlign: "center" } ,
            newHeaderText: "Free And Easy"
        }

        this.props.loadJumbotronStyle(myJumbotronStyle)
    }

    render() {
        const _freeAndEasy = (
            <div className={styles.img}>
                              
            </div >
            );
        return (
            _freeAndEasy
        );
    }
}

