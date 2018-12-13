import React from 'react';
import { connect } from 'react-redux';
import Contact from './Contact';

const ContactList = (props) => (
    <div>
        Contact List:
        <ul>
            {props.contacts.map(contact => {
                return (
                    <li key={contact.id}>
                        <Contact {...contact} />
                    </li>
                );
            })}
        </ul>

    </div>
);

const mapStateToProps = (state) => {
    return {
        contacts: state
    };
}

export default connect(mapStateToProps)(ContactList);