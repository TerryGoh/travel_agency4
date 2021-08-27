import './../index.css';
import React, { Component } from 'react';
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import DB from '../model/Database'


import styles from './TourPackage.module.css';


const tooltip = (tips) => {
    return (
        <Tooltip id="tooltip">
            <strong>{tips}</strong>
        </Tooltip>
    )
}

const TOTAL_COL = 3

const tourPackageBackgroundImg = { backgroundImage: `url(${require('./../images/Default_Jumbotron.jpg')})` }


export class TourPackage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mounted: false,
            errMsg: "",
            validDestination: false
        }
    }


    getErrorMsg = () => {
        return this.state.errMsg
    }

    tourPackagesSelections = (destination) => {
        console.log('destination == ', destination)
        return DB.fetchTourPacakges(destination)

    }

    isDestinationValid = (destination) => {
        if (destination !== 'All') {
            if (DB.countryExist(destination) === undefined) {
                var _errMsg = "Sorry, no tour package to " + destination + ' at the moment !! '
                if (this.state.errMsg === "") {
                    this.setState({ errMsg: _errMsg, validDestination: false })
                }
                return false
            }
        }

        if (this.state.errMsg !== "")
            this.setState({ errMsg: "" })

        this.setState({ validDestination: true })
        return true
    }


    uploadJumbotron = (destination) => {

        if (this.isDestinationValid(destination) === false)
            return

        var myJumbotronStyle
        (destination == 'All') ?
            (
                myJumbotronStyle = {
                    newJumbotronImg: { backgroundImage: `url(${require('./../images/Default_Jumbotron.jpg')})` },
                    newHeaderStyle: { color: '#0EEFEA', textAlign: "center" },
                    newHeaderText: "All Tour Packages !!!"
                }
            ) :
            myJumbotronStyle = DB.fetchJumbotronImg(destination)
        this.props.loadJumbotronStyle(myJumbotronStyle)
    }


    componentDidUpdate(prevProps, prevState) {

        console.log('*************componentDidUpdate**************')

        var toUpdate = true
        var prevDestination = prevProps.match.params.destination
        var currentDestionation = this.props.match.params.destination


        if (prevProps == undefined)
            return false

        if (this.state.mounted === true) {
            this.setState({ mounted: false })
            toUpdate = false
        }

        if (prevDestination === currentDestionation)
            toUpdate = false

        if (toUpdate === false)
            return false


        this.uploadJumbotron(currentDestionation)
    }


    componentDidMount() {
        console.log("---------------componentDidMount----------------")
        if (this.props.loadJumbotronStyle === "")
            return
        this.uploadJumbotron(this.props.match.params.destination)
        this.setState({ mounted: true })
    }

    componentWillUnmount() {
        console.log('*********************************Component WILL UNMOUNT!')
    }


    handleClick = (event, tourPackage) => {
        console.log('Image Click !! ')
    }

    tourPackageHTML = (tourPackages) => {
        return (
            <div>
                <OverlayTrigger placement="top" overlay={tooltip(tourPackages.tips)} >
                    <div className={styles.img} style={tourPackages.img} onClick={(event) => { this.handleClick(event, tourPackages) }} >

                    </div>
                </OverlayTrigger>
                <div className={styles.adText}>
                    <p>{tourPackages.adText}</p>
                </div>
            </div>
        )
    }

    tourPackageHTML_ROW = (selectedTourPackages) => {
        return (
            <div style={{ margin: "auto" }}>
                <Row>
                    {selectedTourPackages.map((item) => (
                        <Col md={4}>
                            {this.tourPackageHTML(item)}
                        </Col>
                    ))}
                </Row>
            </div>
        )
    }

    render() {
        let renderPage
        if (this.state.validDestination === true) {
            var destination = this.props.match.params.destination
            var selectedTourPackages = this.tourPackagesSelections(destination)
            renderPage =

                // dynamic rows ... 
                [...Array(selectedTourPackages.length)].map((u, i) =>
                    <>
                        {(i % TOTAL_COL == 0) ?
                            this.tourPackageHTML_ROW(selectedTourPackages.slice(i, i + TOTAL_COL)) : null
                        }
                    </>)
        }
        else
            renderPage =
                <label style={{ color: "red", fontSize: "20px" }}>
                    Error Message :  {this.getErrorMsg()}
                </label>

        return (
            <div className="body">
                {renderPage}
            </div>
        );
    }
}
