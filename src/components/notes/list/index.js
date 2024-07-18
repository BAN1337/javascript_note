import React, { Fragment } from 'react';
import { Button, Column, Tag, Title, List } from "rbx";
import Moment from 'moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import "../../../styles/notes-count.scss"

function ListNotes(props) {
    return (
        <Fragment>
            <Column.Group size={12} breakpoint="mobile">
                <Column size={6} offset={1} className='notes-count'>
                    <Title size={6} >
                        {props.notes.length} Notes
                    </Title>
                </Column>
                <Column size={2}>
                    <Button state="active" color="primary" outlined size="small" onClick={() => props.createNote()}>
                        Notes +
                    </Button>
                </Column>
            </Column.Group>
            <List className="menu-list" id="notes-list">
                {props.notes.map((item, key) =>
                    <List.Item key={key} onClick={() => props.selectNote(item._id)} active={item == props.current_note}>
                        <Title size={6}>
                            {item.title.replace(/(<([^>]+)>)/ig, "").substring(0, 15)}
                        </Title>
                        <Title size={6} subtitle spaced={false}>
                            {item.body.replace(/(<([^>]+)>)/ig, "").substring(0, 30)}
                        </Title>

                        <Column.Group breakpoint="mobile">
                            <Column size={10}>
                                <Tag color="dark">
                                    {Moment(item.created_at).format('DD/MM/YY')}
                                </Tag>
                            </Column>
                            <Column size={2}>
                                <FontAwesomeIcon
                                    icon={faTrash}
                                    onClick={() => props.deleteNote(item)}
                                    color="grey"
                                />
                            </Column>
                        </Column.Group>
                    </List.Item>
                )}
            </List>
        </Fragment>
    )
}

export default ListNotes;