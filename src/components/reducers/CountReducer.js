export default (state = 0, action) => {
    switch (action.type){
        case 'INCREMENT_QUERY':
            return state + action.payload;
        case 'RESET_QUERY':
            return 0;
        default:
            return state;
    }
}