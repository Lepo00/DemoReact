const initialState = false;

const LoggedReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'SIGNIN':
            return true;
        case 'SIGNOUT':
            return false;
        default:
            return state
    }
}
export default LoggedReducer;