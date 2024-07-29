import React, { Fragment } from "react";
import HeaderUserEdit from "../../../../components/header_user_edit";
import { Column, Section, Title, Container, Card } from 'rbx'
import logoImage from '../../../../assets/images/logo-white.png'
import '../../../../styles/user-edit.scss'
import UsersEditEmailForm from "../../../../components/users/editemail_form";

const UserEditEmailScreen = () => (
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
                                                Edit your email
                                            </Title>
                                        </Column>
                                    </Column.Group>
                                    <UsersEditEmailForm />
                                </Section>
                            </Card.Content>
                        </Card>
                    </Column>
                </Column.Group>
            </Container>
        </Section>
    </Fragment>
)

export default UserEditEmailScreen