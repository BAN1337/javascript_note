import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Help, Label } from "rbx";
import { Link, Navigate } from "react-router-dom";
import UsersService from '../../../services/users';
import Bulma from '@vizuaalog/bulmajs';

function UsersEditForm() {
    const [redirectToHome, setRedirectToHome] = useState(false);
    const [redirectToNotes, setRedirectToNotes] = useState(false);
    const [error, setError] = useState(false);

    if (redirectToHome)
        return <Navigate to="/" />
    else if (redirectToNotes)
        return <Navigate to="/notes" />

    const HandleSubmit = async (evt) => {
        evt.preventDefault()

        Bulma().alert({
            type: 'warning',
            title: 'Delete Account',
            body: 'Really Want Delete Account?',
            confirm: {
                label: 'Confirm',
                onClick: async function () {
                    try {
                        await UsersService.delete(JSON.parse(localStorage.getItem('user'))._id)
                        setRedirectToHome(true)
                    } catch (error) {
                        setError(true)
                    }
                },
            },
            cancel: {
                label: 'Cancel',
                onClick: function () {
                    Bulma().alert({
                        title: 'Cancelled',
                        body: 'You clicked cancel!'
                    });
                }
            }
        });
    }

    return (
        <Fragment>
            <form onSubmit={HandleSubmit}>
                <Column.Group className='is-flex is-vcentered has-text-centered' breakpoint="mobile">
                    <Column size={12}>
                        <Link to='/users/edit/name' className='button is-white is-outlined is-fullwidth'>Edit Current Name</Link>
                        <Link to='/users/edit/email' className='button is-white is-outlined is-fullwidth'>Edit Current Email</Link>
                        <Link to='/users/edit/password' className='button is-white is-outlined is-fullwidth'>Edit Current Password</Link>
                    </Column>
                </Column.Group>
                <Field>
                    <Control>
                        <Column.Group breakpoint="mobile" className='has-text-centered'>
                            <Column>
                                <a className="button is-danger is-outlined is-fullwidth"
                                    onClick={e => setRedirectToNotes(true)}
                                >Cancel</a>
                            </Column>
                            <Column>
                                <Button id='button-delete-count' className="is-warning is-outlined is-fullwidth">Delete Account</Button>
                            </Column>
                        </Column.Group>
                    </Control>
                </Field>
                {error && <Help color="danger">Error Delete Account</Help>}
            </form>
        </Fragment>
    )
}

export default UsersEditForm;