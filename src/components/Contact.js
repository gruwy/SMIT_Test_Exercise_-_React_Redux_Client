import React from 'react';
import { connect } from 'react-redux';
import { removeContact } from '../actions/contacts';

const Contact = ({ id, contact_name, contact_keyword, contact_phonenumber, dispatch }) => (
    <div>
        <h4>{contact_name}</h4>
        <p>Phone number: {contact_phonenumber}</p>
        <p>Keyword: {contact_keyword}</p>
        <button onClick={() => {
            dispatch(removeContact({ id }));
        }}>Remove contact</button>
    </div>
);

export default connect()(Contact);