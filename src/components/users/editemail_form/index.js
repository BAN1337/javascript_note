import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Label, Tag } from "rbx";
import { Navigate } from "react-router-dom";
import UsersService from '../../../services/users';
import Bulma from '@vizuaalog/bulmajs';

function UsersEditEmailForm() {
    const [newEmail, setNewEmail] = useState("");
    const [repeatNewEmail, setRepeatNewEmail] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [redirectToUsersEdit, setRedirectToUsersEdit] = useState(false);
    const [error, setError] = useState('');

    if (redirectToLogin)
        return <Navigate to="/login" />
    else if (redirectToUsersEdit)
        return <Navigate to="/users/edit" />

    const HandleSubmit = async (evt) => {
        evt.preventDefault()

        if (newEmail === repeatNewEmail) {
            try {
                await UsersService.editEmail(JSON.parse(localStorage.getItem('user'))._id, { newEmail: newEmail })
                setRedirectToLogin(true)
                Bulma().alert({
                    type: 'primary',
                    title: 'Edit Email',
                    body: 'Email changed successfully',
                    confirm: 'OK'
                });
            } catch (error) {
                setError('Error to edit email: Email already exists')
            }
        } else {
            setError('Different emails')
        }
    }

    return (
        <Fragment >
            <form onSubmit={HandleSubmit}>
                <Column.Group className='is-flex is-vcentered has-text-centered' breakpoint="mobile">
                    <Column size={12}>
                        <Tag size='medium' color='white' textColor='primary' textWeight='bold'>Current Email</Tag>
                        <Column>
                            <Label size='normal' textColor='white'>{localStorage.getItem('email')}</Label>
                        </Column>
                        <Tag size='medium' color='white' textColor='primary' textWeight='bold'>New Email</Tag>
                        <Column>
                            <Field >
                                <Control >
                                    <Input
                                        type="email"
                                        required
                                        name="newEmail"
                                        value={newEmail}
                                        onChange={e => setNewEmail(e.target.value)}
                                    />
                                </Control>
                            </Field>
                        </Column>
                        <Tag size='medium' color='white' textColor='primary' textWeight='bold'>Repeat New Email</Tag>
                        <Column>
                            <Field >
                                <Control >
                                    <Input
                                        type="email"
                                        required
                                        name="repeatNewEmail"
                                        value={repeatNewEmail}
                                        onChange={e => setRepeatNewEmail(e.target.value)}
                                    />
                                </Control>
                            </Field>
                        </Column>
                    </Column>
                </Column.Group>
                <Field>
                    <Control>
                        <Column.Group breakpoint="mobile" className='has-text-centered'>
                            <Column>
                                <Button className="is-danger is-outlined is-fullwidth"
                                    onClick={e => setRedirectToUsersEdit(true)}
                                >Cancel</Button>
                            </Column>
                            <Column>
                                <Button id='button-delete-count' className="is-warning is-outlined is-fullwidth">Save</Button>
                            </Column>
                        </Column.Group>
                    </Control>
                </Field>
                <Label textColor="white" size='small' className='has-text-centered'>{error}</Label>
            </form>
        </Fragment>
    )
}

export default UsersEditEmailForm;