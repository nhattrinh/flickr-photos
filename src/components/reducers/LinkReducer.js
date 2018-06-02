export default (
    state = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json', 
    action
) => {
    switch (action.type){
        case 'RESET_LINK':
            return action.payload;
        case 'SET_TAGS':
            return String('https://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=' + action.payload).replace(/ /g, '+');
        default:
            return state;
    }
};