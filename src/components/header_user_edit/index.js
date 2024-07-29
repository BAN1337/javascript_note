import React, { useState } from 'react';
import { Navbar, Column, Dropdown, Button } from 'rbx';
import logoImage from '../../assets/images/logo-white.png';
import '../../styles/header.scss'
import UsersService from '../../services/users';
import { Navigate, Link } from "react-router-dom";


function HeaderUserEdit(props) {
    const [redirectToHome, setRedirectToHome] = useState(false);
    const [redirectToNotes, setRedirectToNotes] = useState(false);

    const logOut = async () => {
        await UsersService.logout();
        setRedirectToHome(true);
    }

    if (redirectToHome)
        return <Navigate to="/" />
    else if (redirectToNotes)
        return <Navigate to="/notes" />

    return (
        <Navbar color="primary" className="navbar-logged">
            <Navbar.Brand>
                <Column.Group>
                    <Column size="11" offset="1">
                        <a href='#' onClick={e => setRedirectToNotes(true)}>
                            <img src={logoImage} />
                        </a>
                    </Column>
                </Column.Group>
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

export default HeaderUserEdit;