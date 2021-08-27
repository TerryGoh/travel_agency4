import React, { Component } from 'react';
import { MemoryRouter } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

import {  Route } from 'react-router-dom';

import { ToolTipNavButtons } from './view/ToolTipNavButtons'

import { Home } from './view/Home'

import Catalogue from './view/Catalogue'


import { TourPackage } from './view/TourPackage'

import { FreeAndEasy } from './view/FreeAndEasy'

import { FixNavBar } from './view/FixNavBar'

import { Membership } from './view/Membership'

import { ContactUs } from './view/ContactUs'

import ProductCard from './view/Product'

import CommonProvider from './contexts/common';

import ProductsProvider from './contexts/products';

import CartProvider from './contexts/cart';
import CheckoutProvider from './contexts/checkout';
import { BrowserRouter as Router, Switch } from "react-router-dom"; 
import CommonLayout from "./layouts/CommonLayout";
import RouteWrapper from "./layouts/RouteWrapper";
import AuthPage from "./pages/auth";
import AuthLayout from "./layouts/AuthLayout";
import HomePage from "./pages/home";
import CheckoutPage from "./pages/checkout";
import "./assets/scss/style.scss";

const BackgroundStyle = {

    Jumbotron: {
        backgroundSize: '100% 100%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
    }
};


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            jumbotronImg: {},
            headerStyle: { color: 'white', textAlign: "left" },
            headerText: "Welcome To Terry Tour Agency"
        };
    }

    setJumbotronStyle = (newStyle) => {
        const { newJumbotronImg, newHeaderStyle, newHeaderText } = newStyle

        this.setJumbotronImg(newJumbotronImg)
        this.setHeaderStyle(newHeaderStyle)
        this.setHeaderText(newHeaderText)
    }

    setJumbotronImg = (newJumbotronImg) => {

        var backgroundStyle = {
            ...BackgroundStyle.Jumbotron,
            ...newJumbotronImg
        };

        this.setState({ jumbotronImg: backgroundStyle })
    }

    setHeaderStyle = (newHeaderStyle) => {
        this.setState({ headerStyle: newHeaderStyle })
    }


    setHeaderText = (newHeaderText) => {
        this.setState({ headerText: newHeaderText })
    }


    render() {

        return (
            <CommonProvider>
                <ProductsProvider>
                    <CartProvider>
                        <CheckoutProvider>
                          {/*
                            <Router>
                                <Switch>
                                    <RouteWrapper
                                        path="/"
                                        exact
                                        component={HomePage}
                                        layout={CommonLayout}
                                    />
                                    <RouteWrapper
                                        path="/checkout"
                                        component={CheckoutPage}
                                        layout={CommonLayout}
                                    />
                                    <RouteWrapper
                                        path="/auth"
                                        component={AuthPage}
                                        layout={AuthLayout}
                                    />
                                </Switch>
                            </Router>
                          */}
                            <MemoryRouter>
                                    <Switch>
                                        <Route exact path='/'
                                            render={props =>
                                                <Catalogue />} />

                                    </Switch>
                            </MemoryRouter>
                           
                        </CheckoutProvider>
                    </CartProvider>
                </ProductsProvider>
            </CommonProvider>
        );
    }
}

export default App;
