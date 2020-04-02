import { GET_STORIES } from '../actions';

const initialState = {
    ids: []
};

function stories(state = initialState, { type, payload }) {
    switch (type) {
        case GET_STORIES:
            return {
                ...state,
                ids: payload
            }

        default:
            return state;
    }
}

export default stories;