import React from 'react';

export default class ContactForm extends React.Component {
    constructor(props) {
        super(props);
        this.onContactNameChange = this.onContactNameChange.bind(this);
        this.onContactKeywordChange = this.onContactKeywordChange.bind(this);
        this.onContactPhonenumberChange = this.onContactPhonenumberChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            contact_name: props.contact ? props.contact.contact_name : '',
            contact_keyword: props.contact ? props.contact.contact_keyword : '',
            contact_phonenumber: props.contact ? props.contact.contact_phonenumber : '',

            error: ''
        };
    }

    onContactNameChange(e) {
        const contact_name = e.target.value;
        this.setState(() => ({ contact_name: contact_name }));
    }

    onContactKeywordChange(e) {
        const contact_keyword = e.target.value;
        this.setState(() => ({ contact_keyword: contact_keyword }));
    }

    onContactPhonenumberChange(e) {
        const contact_phonenumber = e.target.value;
        this.setState(() => ({ contact_phonenumber: contact_phonenumber }));
    }

    onSubmit(e) {
        e.preventDefault();

        if (!this.state.contact_name || !this.state.contact_keyword || !this.state.contact_phonenumber) {
            this.setState(() => ({ error: 'Please set name, keyword & phone number!' }));
        } else {
            this.setState(() => ({ error: '' }));
            this.props.onSubmitContact(
                {
                    contact_name: this.state.contact_name,
                    contact_keyword: this.state.contact_keyword,
                    contact_phonenumber: this.state.contact_phonenumber,
                }
            );
        }
    }

    render() {
        return (
            <div>
                {this.state.error && <p className='error'>{this.state.error}</p>}
                <form onSubmit={this.onSubmit} className='add-contact-form'>

                    <input type="text" placeholder="Contact's name" autoFocus
                        value={this.state.contact_name}
                        onChange={this.onContactNameChange} />
                    <br />

                    <input type="text" placeholder="Contact's keyword"
                        value={this.state.contact_keyword}
                        onChange={this.onContactKeywordChange} />
                    <br />

                    <input type="text" placeholder="Contact's phonenumber"
                        value={this.state.contact_phonenumber}
                        onChange={this.onContactPhonenumberChange} />
                    <br />

                    <br />
                    <button>Add Contact</button>
                </form>
            </div>
        );
    }
}