import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

export default class Header extends Component {
    render(){
        return (
            <React.Fragment>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristorance Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the world's jlsfjldsjfljldsjllj</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }
}