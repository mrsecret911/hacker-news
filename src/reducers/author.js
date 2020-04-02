import { GET_AUTHOR_INFO } from '../actions';

const initialState = {
    info: {}
};

function author(state = initialState, { type, payload }) {
    switch (type) {
        case GET_AUTHOR_INFO:
            const { id, data } = payload;
            return {
                ...state,
                info: {
                    ...state.info,
                    [id]: data
                }
            };

        default:
            return state;
    }
}

export default author;