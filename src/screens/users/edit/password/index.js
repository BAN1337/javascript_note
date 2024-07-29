import React, { Fragment } from "react";
import HeaderUserEdit from "../../../../components/header_user_edit";
import { Column, Section, Title, Container, Card } from 'rbx'
import logoImage from '../../../../assets/images/logo-white.png'
import '../../../../styles/user-edit.scss'
import UsersEditPasswordForm from "../../../../components/users/editpassword_form";

const UserEditPasswordScreen = () => (
    <Fragment>
        <HeaderUserEdit />
        <Section size="medium" className="user-edit">
            <Container>
                <Column.Group centered>
                    <Column size={5}>
                        <Card backgroundColor="primary">
                            <Card.Content>
                                <Section>
                                    <Column.Group className='has-text-centered'>
                                        <Column size={12}>
                                            <img src={logoImage} />
                                        </Column>
                                    </Column.Group>

                                    <Column.Group className='is-flex is-vcentered has-text-centered'>
                                        <Column size={12}>
                                            <Title size={6} className="has-text-white">
                                                Edit your password
                                            </Title>
                                        </Column>
                                    </Column.Group>
                                    <UsersEditPasswordForm />
                                </Section>
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
)

export default UserEditPasswordScreen