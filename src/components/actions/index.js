export const setImages = (imagesObj) => {
    return {
        type: 'SET_IMAGES',
        payload: imagesObj
    };
};

export const resetLink = () => {
    return {
        type: 'RESET_LINK',
        payload: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json'
    }
}

export const setTags = (tags) => {
    return {
        type: 'SET_TAGS',
        payload: tags
    };
};

export const incrementQueryCount = () => {
    return {
        type: 'INCREMENT_QUERY',
        payload: 1
    };
};

export const resetQuery = () => {
    return {
        type: 'RESET_QUERY',
        payload: 0
    }
}