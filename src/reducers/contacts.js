const contactsReducerDefaultState = [];

export default (state = contactsReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_CONTACT':
            return [
                ...state,
                action.contact
            ];
        case 'REMOVE_CONTACT':
            return state.filter(({ id }) => id !== action.id);
        case 'GET_CONTACTs':
            return action.contacts;
        default:
            return state;
    }
};