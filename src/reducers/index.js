import { combineReducers } from 'redux';

import author from './author';
import stories from './stories';
import story from './story';

const reducer = combineReducers({
    author,
    stories,
    story
});

export default reducer;