import axios from 'axios';

export const GET_STORIES = 'GET_STORIES';

export const getStories = () => dispatch => {
    axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
        .then(({ data }) => {
            const randomIds = [];
            while(randomIds.length < 10) {
                const randomId = Math.floor(Math.random() * data.length);
                randomIds.push(data.splice(randomId, 1)[0]);
            }

            dispatch({
                type: GET_STORIES,
                payload: randomIds
            });
        })
        
}

