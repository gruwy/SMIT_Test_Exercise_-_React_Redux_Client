import React from 'react';
import ContactForm from './ContactForm';
import { connect } from 'react-redux';
import { addContact } from '../actions/contacts';

const AddContact = (props) => (
    <div>
        <h3>Set Contact information:</h3>
        <ContactForm
            onSubmitContact={(contact) => {
                props.dispatch(addContact(contact));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddContact);
