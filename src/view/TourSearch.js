import React, { Component } from 'react';
import './../index.css';

import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { Redirect } from 'react-router-dom'
import { TourPackage } from './TourPackage'
import { Switch, Route } from 'react-router-dom';

const getRemainingMonths = () => {
    var _monthId = new Date().getMonth() // 0 = Jan ... 11 = Dec

    var _months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

    return _months.slice(_monthId)
}

const get2Years = () => {
    var _thisYear = new Date().getFullYear()
    return [_thisYear, _thisYear + 1]
}



export class TourSearch extends Component {

    constructor(props) {
        super(props);

        this.state = {
            destination: "Any Destination",
            package: "Tour Type",
            month: "Month",
            year: "Year",
            errIndex: -1,
            errCode: '1111'
        }
    }

    generateErrorCode = (idx) => {
        var _x = this.state.errCode
        _x = _x.slice(0, idx) + '0' + _x.slice(++idx)
        this.setState({ errCode: _x })

    }

    getErrorMsg = () => {
        var id = this.state.errIndex
        return this.tourSelection()[id].errMsg
    }

    tourSelection = () => [
        {
            label: this.state.destination,
            options: ['Australia', 'China', 'Europe', 'Indonesia', 'Japan' , 'South Korea', 'Taiwan', 'Thailand'],
            onSelect: (optionSelected) => {
                console.log(optionSelected)
                this.setState({ destination: optionSelected })

                this.generateErrorCode(0)
            },
            errMsg: "Please Select Destination",
            searchOK: false,
        },
        {
            label: this.state.package,
            options: ["Package", "Free & Easy"],
            onSelect: (optionSelected) => {
                console.log(optionSelected)
                this.setState({ package: optionSelected })
                this.generateErrorCode(1)
            },
            errMsg: "Please Select Type"
        },
        {
            label: this.state.month,
            options: getRemainingMonths(),
            onSelect: (optionSelected) => {
                console.log(optionSelected)
                this.setState({ month: optionSelected })
                this.generateErrorCode(2)
            },
            errMsg: "Please Select Month"
        },
        {
            label: this.state.year,
            options: get2Years(),
            onSelect: (optionSelected) => {
                console.log(optionSelected)
                this.setState({ year: optionSelected })
                this.generateErrorCode(3)
            },
            errMsg: "Please Select Year"
        }
    ]

    handleClick = () => {
        console.log('---------handleClick---------')
        console.log(this.state.destination + ' ' + this.state.package + ' ' + ' ' + this.state.month + ' ' + this.state.year)
        if (this.state.errCode !== '0000') {
            //         console.log('Generate Error message')
            var id = this.state.errCode.indexOf('1')
            this.setState({ errIndex: id })
            //          console.log('errIndex == ', id)
            //          console.log(this.tourSelection()[id].errMsg)
        } else {
            this.setState({ searchOK: true })
        }
    }

    render() {

        const tourSelectionDropdown = () => {
            return (
                this.state.searchOK === true ?
                    <Redirect to={`/tourPackage/${this.state.destination}`}/>
                    :
                    <div>
                        {(this.state.errIndex !== -1 ?
                            <Row>
                                <Col lg={{ span: 5, offset: 3 }} >
                                    <label style={{ color: "red", fontSize: "20px" }}>
                                        Error Message :  {this.getErrorMsg()}
                                    </label>
                                </Col>
                            </Row> : <div></div>)}
                        <Row>
                            <Col lg={{ span: 5, offset: 3 }} >

                                <div style={{ margin: "auto" }}>
                                    {this.tourSelection().map((item) => (
                                        <>
                                            <DropdownButton
                                                as={ButtonGroup}
                                                key={item.label}
                                                variant={'info'.toLowerCase()}
                                                title={item.label}
                                                style={{ marginLeft: 5 }}
                                                id={`dropdown-variants-${item.label}`}
                                                onSelect={(value) => item.onSelect(value)}
                                            >
                                                {item.options.map((option, index) => (
                                                    <>
                                                        <Dropdown.Item eventKey={option}>{option}
                                                        </Dropdown.Item>
                                                    </>
                                                ))}
                                            </DropdownButton>{' '}
                                        </>
                                    ),
                                    )}
                                </div>
                            </Col>

                            <input type="submit" value="Search" style={{ float: "left", borderRadius: "8px", marginTop: "-8px", fontSize: "20px" }} onClick={(event) => { this.handleClick(event) }} />

                        </Row>
                    </div>
            );
        }


        return (
            tourSelectionDropdown()
        );
    }
}
