import React, { useState } from "react";
import { Navbar, Container, Column, Button } from 'rbx'
import LogoImage from '../../assets/images/logo.png'
import '../../styles/header.scss'
import { Link } from "react-router-dom";

function Header() {
    return (
        <Navbar>
            <Container>
                <Navbar.Brand>
                    <Link to='/'>
                        <img src={LogoImage} />
                    </Link>

                    <Navbar.Burger
                        className="navbar-burger burger"
                        aria-label="menu"
                        aria-expanded="false"
                        data-target="navbar-menu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </Navbar.Burger>
                </Navbar.Brand>

                <Navbar.Menu id="navbar-menu">
                    <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                        <Column.Group>
                            <Column>
                                <Button to="/register" className="button is-white">Register</Button>
                            </Column>
                            <Column>
                                <Button to="/login" className="button is-outlined" color={"black"}>Login</Button>
                            </Column>
                        </Column.Group>
                    </Navbar.Segment>
                </Navbar.Menu>
            </Container>
        </Navbar >
    )
}

export default Header