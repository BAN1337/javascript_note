import React, { Fragment, useState, useEffect } from "react";
import HeaderLogged from "../../../components/header_logged";
import Notes from "../../../components/notes";

const NotesScreen = () => {

    useEffect(() => {
        document.title = 'Notes';
    }, []);

    const [isOpen, setIsOpen] = useState(false)

    function verifyIsOpen() {
        if (isOpen) setIsOpen(false)
        else setIsOpen(true)
    }

    return (
        < Fragment >
            <HeaderLogged verifyIsOpen={verifyIsOpen} />
            <Notes verifyIsOpen={verifyIsOpen} isOpen={isOpen} setIsOpen={setIsOpen} />
        </Fragment >
    )
}

export default NotesScreen