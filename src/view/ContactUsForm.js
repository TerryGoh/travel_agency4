import React, { Component } from 'react';
import './../App.css'
import './../index.css';

export class ContactUsForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            userName: '',
            email: '',
            msg: '',
        };
    };


    validateEmail = (elementValue) => {
        var _errMsg = ""
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (emailPattern.test(elementValue) === false) {
            _errMsg = "Invalid email address."
        }
        console.log('validateEmail : ', _errMsg)
        return _errMsg;
    }

    validateUserName = (userName) => {
        var _errMsg = ""
        if (userName.trim() === '') {
            console.log("Username is required")
            _errMsg = "Username is required."
        }
        return _errMsg
    }

    validateMsg = (msg) => {
        var _errMsg = ""
        if (msg.trim() === '') {
            _errMsg = "Please enter your enquiry."
        }
        return _errMsg
    }

    upadteUserName = (event) => {
        this.setState({
            userName: event.target.value,
        })
        this.props.setDisplayError(false)

    }

    updateEmail = (event) => {
        this.setState({
            email: event.target.value,
        });
        this.props.setDisplayError(false)
    }

    updateMsg = (event) => {
        this.setState({
            msg: event.target.value,
        });
        this.props.setDisplayError(false)
    }


    verifyEntry = (event) => {
    }

    handleSubmit = (event) => {
        var errMsgArr = []
        errMsgArr.push(this.validateUserName(this.state.userName))
        errMsgArr.push(this.validateEmail(this.state.email))
        errMsgArr.push(this.validateMsg(this.state.msg))

        var filtered = errMsgArr.filter(function (el) {
            return el !== "";
        });

        event.preventDefault();

        if (filtered.length === 0) {
            this.props.setDisplayError(false)
            this.props.setErrMsg('')
            this.props.setSubmit(true)
        } else {
            this.props.setDisplayError(true)
            this.props.setErrMsg(filtered[0])
        }
    }

    render() {

        const _formContactUs = (
            <form onSubmit={this.handleSubmit}>
                <div class="row">
                    <div class="col-lg-3" >
                        <label>* Your Name :</label>
                    </div>
                    <div class="col-lg-9" >
                        <input type="Text" id="EnqName" name="EnqName" style={{  }} value={this.state.userName} onChange={this.upadteUserName} placeholder="Your Name" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3" >
                        <label>* Email Address :</label>
                    </div>
                    <div class="col-lg-9" >
                        <input type="Text" id="EnqEmail" name="EnqEmail" style={{  }} value={this.state.email} onChange={this.updateEmail} placeholder="me@company.com" />
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-3" >
                        <label>* Enquiry :</label>
                    </div>
                    <div class="col-lg-9" >
                        <textarea placeholder="Enter enquiry here ..." onChange={this.updateMsg} value={this.state.msg} style={{ height: "150px" }} ></textarea>
                    </div>
                </div>
                <br></br>
                <input type="submit" value="Submit" style={{ float: "right", borderRadius: "8px" }} onClick={(event) => { this.verifyEntry(event) }} />
            </form>
        );
        return (
            _formContactUs
        );
    }
}

