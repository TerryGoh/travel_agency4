

import { ModalPanel } from './ModalPanel'
import { ContactUsForm } from './ContactUsForm';
import React, { Component } from 'react';

import './../App.css'
import './../index.css';
import styles from './ContactUs.module.css';


const contactUs_img = require('./../images/contact_us.jpg');

const contactUsImg = { backgroundImage: `url(${contactUs_img})` } ;


const _headerStyle = `${styles.headerText}`

export class ContactUs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            errMsg: '',
            displayError: false,
            submit: false,
        };
    };

    componentDidMount() {
        const myJumbotronStyle = {
            newJumbotronImg: contactUsImg,
            newHeaderStyle: {color: 'darkblue', textAlign: "center" } ,
            newHeaderText: "Feel Free To Contact Us"
        }

        this.props.loadJumbotronStyle(myJumbotronStyle)
    }

    setDisplayError = (status) => {
        this.setState({ displayError: status })
    }

    setErrMsg = (msg) => {
        this.setState({ errMsg: msg })
    }

    setSubmit = (status) => {
        this.setState({ submit: status })
    }

    render() {

        const _contactUs = (
            <div className="body">
                <div class="row">
                    <div class="col-lg-3" >
                        <p class={_headerStyle}>Our Location</p>
                        <label> Address : <br></br> Commonwealth Centre,<br></br> Blk 88,  #01-11.</label>
                        <label>Tel : +656233267.</label>
                    </div>
                    <div class="col-lg-9" >
                        <p class={_headerStyle}>Contact Us</p>
                        <ContactUsForm
                            setDisplayError={this.setDisplayError}
                            setErrMsg={this.setErrMsg}
                            setSubmit={this.setSubmit}
                        />
                    </div>
                </div>
                {this.state.displayError &&
                    <div className={styles.submitErr}>
                        <ModalPanel showPanel={this.state.displayError} msg={this.state.errMsg} title="Validation" backgroundColor="pink" />
                    </div>
                }

                {this.state.submit &&
                    <div className={styles.submitOK}>
                        <ModalPanel showPanel={this.state.submit} msg="Your Enqiry has been submitted. It will take about 3 to 5 working days to get back to you." title="Enquiry Submitted Successfully" width="400" backgroundColor="lightblue" />
                    </div>
                }

            </div>

        );
        return (
            _contactUs
        );
    }
}

