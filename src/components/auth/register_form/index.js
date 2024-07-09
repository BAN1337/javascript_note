import React, { Fragment, useState } from "react";
import { Button, Field, Control, Input, Column, Section, Help, Label } from 'rbx'
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function RegisterForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false);
    const [error, setError] = useState(false);

    if (redirectToLogin === true)
        return <Navigate to="/login" />

    return (
        <Fragment>
            <Column.Group centered>
                <form>
                    <Column size={12}>
                        <Field>
                            <Label size="small">Name:</Label>
                            <Control>
                                <Input
                                    type="name"
                                    required
                                    name="name"
                                    value={name}
                                    onChange={e => setName(e.target.value)}
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Email:</Label>
                            <Control>
                                <Input
                                    type="email"
                                    required
                                    name="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Label size="small">Password:</Label>
                            <Control>
                                <Input
                                    type="password"
                                    required
                                    name="password"
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Control>
                        </Field>
                        <Field>
                            <Control>
                                <Column.Group breakpoint="mobile">
                                    <Column>
                                        <Link to='/login' className="button is-white has-text-custom-purple"
                                        >Login or</Link>
                                    </Column>
                                    <Column>
                                        <Button color="success" outlined>Register</Button>
                                    </Column>
                                </Column.Group>
                            </Control>
                        </Field>
                        {error && <Help color="danger">Email or Password invalid</Help>}
                    </Column>
                </form>
            </Column.Group>
        </Fragment>
    )
}

export default RegisterForm