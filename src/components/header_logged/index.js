import React, { Fragment, useState } from 'react';
import { Navbar, Container, Column, Dropdown, Button } from 'rbx';
import logoImage from '../../assets/images/logo-white.png';
import '../../styles/header.scss'
import UsersService from '../../services/users';
import { Navigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faList } from '@fortawesome/free-solid-svg-icons'


function HeaderLogged(props) {
    const [redirectToHome, setRedirectToHome] = useState(false);

    const logOut = async () => {
        await UsersService.logout();
        setRedirectToHome(true);
    }

    if (redirectToHome == true)
        return <Navigate to="/" />

    return (
        <Navbar color="primary" className="navbar-logged">
            <Navbar.Brand>
                <Column.Group>
                    <Column size="11" offset="1">
                        <Link to="/notes">
                            <img src={logoImage} />
                        </Link>
                    </Column>
                </Column.Group>
                <Navbar.Segment as="div" className="navbar-item navbar-start" align="start">
                    <Navbar.Item as="div">
                        <Button
                            className="open-button"
                            color="white"
                            outlined
                            onClick={() => props.verifyIsOpen()}>
                            <FontAwesomeIcon icon={faList} />
                        </Button>
                    </Navbar.Item>
                </Navbar.Segment>
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

            <Navbar.Menu>
                <Navbar.Segment as="div" className="navbar-item navbar-end" align="right">
                    <Navbar.Item as="div">
                        <Dropdown className='is-hoverable'>
                            <Dropdown.Trigger>
                                <Button outlined color='white'>
                                    <span>{localStorage.getItem('name')} ▼</span>
                                </Button>
                            </Dropdown.Trigger>
                            <Dropdown.Menu>
                                <Dropdown.Content>
                                    <Dropdown.Item as="div">
                                        <Link to="/users/edit">User Edit</Link>
                                    </Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item as="div">
                                        <a href="#" onClick={e => logOut()}>LogOut</a>
                                    </Dropdown.Item>
                                </Dropdown.Content>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Navbar.Item>
                </Navbar.Segment>
            </Navbar.Menu>
        </Navbar>
    )
}

export default HeaderLogged;