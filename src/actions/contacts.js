import axios from '../axios/axios';

const _addContact = (contact) => ({
    type: 'ADD_CONTACT',
    contact
});

export const addContact = (contactData = {
    contact_name: '',
    contact_keyword: '',
    contact_phonenumber: '',
}) => {
    return (dispatch) => {
        const contact = {
            contact_name: contactData.contact_name,
            contact_keyword: contactData.contact_keyword,
            contact_phonenumber: contactData.contact_phonenumber,
        };

        return axios.post('contacts/create', contact).then(result => {
            dispatch(_addContact(result.data));
        });
    };
};

const _removeContact = ({ id } = {}) => ({
    type: 'REMOVE_CONTACT',
    id
});

export const removeContact = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`contacts/${id}`).then(() => {
            dispatch(_removeContact({ id }));
        })
    }
};


const _getContacts = (contacts) => ({
    type: 'GET_CONTACTs',
    contacts
});

export const getContacts = () => {
    return (dispatch) => {
        return axios.get('contacts').then(result => {
            const contacts = [];

            result.data.forEach(item => {
                contacts.push(item);
            });

            dispatch(_getContacts(contacts));
        });
    };
};