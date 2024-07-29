import React, { Fragment, useState } from "react";
import { Button } from "rbx";
import Bulma from '@vizuaalog/bulmajs';
import { Navigate } from "react-router-dom";

const NotificationScreen = () => {
    const [redirectToNotes, setRedirectToNotes] = useState(false);

    if (redirectToNotes) return <Navigate to='/notes' />

    function buttonDeleteAccount() {
        Bulma().alert({
            type: 'primary',
            title: 'Edit Email',
            body: 'Email changed successfully',
            confirm: 'OK'
        });
    }

    return (
        <Fragment>
            <Button id='example-alert-button-4' className="button is-outlined is-info" onClick={buttonDeleteAccount}>Teste</Button>
        </Fragment>
    )
}

export default NotificationScreen