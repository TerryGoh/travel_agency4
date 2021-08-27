import React from "react";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

import { LinkContainer } from 'react-router-bootstrap';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';


const tooltip = (tips) => {
    return (
        <Tooltip id="tooltip">
            <strong>{tips}</strong>
        </Tooltip>
    )
}

const ToolTipNavButton = (props) => {
    return (
        <OverlayTrigger placement="top" overlay={tooltip(props.tips)}>
            <LinkContainer to={props.link}>
                <Button
                    style={{
                        backgroundColor: '#D7DDE4',
                        cursor: 'arrow',
                        marginLeft: '0.5em',
                        marginRight: '0.5em',
                    }}
                >{props.text}
                </Button>
            </LinkContainer>
        </OverlayTrigger>
    )
}

export const ToolTipNavButtons = () => {
    return (
        <div style={{ marginTop: "50px", opacity:"0.9" }}>
        <ButtonToolbar className="custom-btn-toolbar" justify-content="center">
            <ToolTipNavButton link="/" tips="Our Home" text="Home" />
            <ToolTipNavButton link="/tourPackage/All" tips="Promotions !" text="Tour Package" />
            <ToolTipNavButton link="/freeAndEasy" tips="Flexible Itenary" text="Free & Easy" />
        </ButtonToolbar>
        </div>
    )
}

