import axios from 'axios';

export const GET_STORY_INFO = 'GET_STORY_INFO';

export const getStoryInfo = id => dispatch => {    
    axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json `)
        .then(({ data }) => {
            dispatch({
                type: GET_STORY_INFO,
                payload: { id, data }
            });
        })
}

