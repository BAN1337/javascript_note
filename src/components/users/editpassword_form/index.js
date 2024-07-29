import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Label, Tag } from "rbx";
import { Navigate } from "react-router-dom";
import UsersService from '../../../services/users';
import Bulma from '@vizuaalog/bulmajs';

function UsersEditPasswordForm() {
    const [currentPassword, setCurrentPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [repeatNewPassword, setRepeatNewPassword] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [redirectToUsersEdit, setRedirectToUsersEdit] = useState(false);
    const [error, setError] = useState('');

    if (redirectToLogin)
        return <Navigate to="/login" />
    else if (redirectToUsersEdit)
        return <Navigate to="/users/edit" />

    const HandleSubmit = async (evt) => {
        evt.preventDefault()

        if (newPassword === repeatNewPassword) {
            try {
                await UsersService.editPassword(JSON.parse(localStorage.getItem('user'))._id, { currentPassword: currentPassword, newPassword: newPassword })
                setRedirectToLogin(true)
                Bulma().alert({
                    type: 'primary',
                    title: 'Edit Password',
                    body: 'Password changed successfully',
                    confirm: 'OK'
                });
            } catch (error) {
                setError('Error to edit password: Incorret Current Password')
            }
        } else {
            setError('Different passwords')
        }
    }

    return (
        <Fragment >
            <form onSubmit={HandleSubmit}>
                <Column.Group className='is-flex is-vcentered has-text-centered' breakpoint="mobile">
                    <Column size={12}>
                        <Tag size='medium' color='white' textColor='primary' textWeight='bold'>Current Password</Tag>
                        <Column>
                            <Field >
                                <Control >
                                    <Input
                                        type="password"
                                        required
                                        name="currentPassword"
                                        value={currentPassword}
                                        onChange={e => setCurrentPassword(e.target.value)}
                                    />
                                </Control>
                            </Field>
                        </Column>
                        <Tag size='medium' color='white' textColor='primary' textWeight='bold'>New Password</Tag>
                        <Column>
                            <Field >
                                <Control >
                                    <Input
                                        type="password"
                                        required
                                        name="newPassword"
                                        value={newPassword}
                                        onChange={e => setNewPassword(e.target.value)}
                                    />
                                </Control>
                            </Field>
                        </Column>
                        <Tag size='medium' color='white' textColor='primary' textWeight='bold'>Repeat New Password</Tag>
                        <Column>
                            <Field >
                                <Control >
                                    <Input
                                        type="password"
                                        required
                                        name="repeatNewPassword"
                                        value={repeatNewPassword}
                                        onChange={e => setRepeatNewPassword(e.target.value)}
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

export default UsersEditPasswordForm;