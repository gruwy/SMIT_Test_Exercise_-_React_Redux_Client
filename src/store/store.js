import { createStore, applyMiddleware } from "redux";
import contacts from '../reducers/contacts';
import thunk from 'redux-thunk';

export default () => {
    return createStore(contacts, applyMiddleware(thunk));
};