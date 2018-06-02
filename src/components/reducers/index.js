import { combineReducers } from 'redux';

// import reducers
import ImagesReducer from './ImagesReducer';
import LinkReducer from './LinkReducer';
import CountReducer from './CountReducer';

export default combineReducers({
    images: ImagesReducer,
    link: LinkReducer,
    queryCount: CountReducer
});