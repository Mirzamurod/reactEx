import React, { Component } from "react";
import PropTypes from "prop-types";
import List from "./List";
import Form from './Form'

const Contacts = props =>
    <div>
        <List contacts={ props.contacts } />
        <Form addContacts={ props.addContacts } />
    </div>

Contacts.propTypes = {
    contacts: PropTypes.array.isRequired,
    addContacts: PropTypes.func
}

export default Contacts;