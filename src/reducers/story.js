import { GET_STORY_INFO } from '../actions';

const initialState = {
    info: {}
};

function story(state = initialState, { type, payload }) {
    switch (type) {
        case GET_STORY_INFO:
            const { id, data } = payload;
            return {
                ...state,
                info: {
                    ...state.info,
                    [id]: data
                }
            }

        default:
            return state;
    }
}

export default story ;