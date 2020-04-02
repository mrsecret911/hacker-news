import React, { useEffect, useMemo, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux'

import { getStories, getStoryInfo, getAuthorInfo } from '../actions';
import Table from './Table';

function NewsList() {
    const dispatch = useDispatch();
    const ids = useSelector(({ stories: { ids } }) => ids);
    const storyInfo = useSelector(({ story: { info } }) => info);
    const authorInfo = useSelector(({ author: { info } }) => info);
    const columns = useMemo(() => [
        {
            Header: 'Story Info',
            columns: [
                { Header: 'Title', accessor: 'title', width: 300 },
                { Header: 'Url', accessor: 'url', width: 100 },
                { Header: 'Time', accessor: 'time', },
                { Header: 'Score', accessor: 'score', sortable: true, }
            ],
        },
        {
            Header: 'Author',
            columns: [
                { Header: 'Author ID', accessor: 'id', },
                { Header: 'Author karma', accessor: 'karma', },
            ]
        }
    ], []);

    useEffect(() => {
        dispatch(getStories());
    }, [dispatch]);

    useEffect(() => {
        ids.forEach(id => dispatch(getStoryInfo(id)));
    }, [dispatch, ids]);

    useEffect(() => {
        if (Object.keys(storyInfo).length === 10) {
            ids.forEach(id => dispatch(getAuthorInfo(storyInfo[id].by)));
        }
    }, [dispatch, ids, storyInfo]);

    const getTableData = useCallback(() => 
        ids.map(id => ({ ...storyInfo[id], ...authorInfo[storyInfo[id].by] }))
    , [ids, storyInfo, authorInfo]);

    return (
        <div>
            { Object.keys(authorInfo).length === 10 ? 
                <Table 
                    columns={columns} 
                    data={getTableData()}
                />
            : <div className='loading-message'>Loading...</div>}
        </div>
    );
}

export default NewsList;