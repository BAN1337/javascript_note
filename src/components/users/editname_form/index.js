import React, { Fragment, useState } from 'react';
import { Button, Field, Control, Input, Column, Label, Tag } from "rbx";
import { Navigate } from "react-router-dom";
import UsersService from '../../../services/users';
import Bulma from '@vizuaalog/bulmajs';

function UsersEditNameForm() {
    const [newName, setNewName] = useState("");
    const [redirectToUsersEdit, setRedirectToUsersEdit] = useState(false);
    const [error, setError] = useState(false);

    if (redirectToUsersEdit)
        return <Navigate to="/users/edit" />

    const HandleSubmit = async (evt) => {
        evt.preventDefault()

        try {
            await UsersService.editName(JSON.parse(localStorage.getItem('user'))._id, { newName: newName })
            setRedirectToUsersEdit(true)
            Bulma().alert({
                type: 'primary',
                title: 'Edit Name',
                body: 'Name changed successfully',
                confirm: 'OK'
            });
        } catch (error) {
            setError(true)
        }
    }

    return (
        <Fragment >
            <form onSubmit={HandleSubmit}>
                <Column.Group className='is-flex is-vcentered has-text-centered' breakpoint="mobile">
                    <Column size={12}>
                        <Tag size='medium' color='white' textColor='primary' textWeight='bold'>Current Name</Tag>
                        <Column>
                            <Label size='normal' textColor='white'>{localStorage.getItem('name')}</Label>
                        </Column>
                        <Tag size='medium' color='white' textColor='primary' textWeight='bold'>New Name</Tag>
                        <Column>
                            <Field>
                                <Control>
                                    <Input
                                        type="name"
                                        required
                                        name="name"
                                        value={newName}
                                        onChange={e => setNewName(e.target.value)}
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
                {error && <Label textColor="white" size='small' className='has-text-centered'>Error to edit name</Label>}
            </form>
        </Fragment>
    )
}

export default UsersEditNameForm;