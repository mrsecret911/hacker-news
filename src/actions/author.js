import axios from 'axios';

export const GET_AUTHOR_INFO = 'GET_AUTHOR_INFO';

export const getAuthorInfo = id => dispatch => {    
    axios.get(`https://hacker-news.firebaseio.com/v0/user/${id}.json`)
        .then(({ data }) => {
            dispatch({
                type: GET_AUTHOR_INFO,
                payload: { id, data }
            });
        })
}

