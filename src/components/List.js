/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import '../style/List.scss';

const List = props => {
    const { id, name, subname, host, limit } = props.roomInfo;

    const handleClick = e => {
        console.log('click setting!');
        e.preventDefault();
    }

    return (
        <Link to={{
            pathname: `/room/${id}`,
            state: {
                room: props.roomInfo
            }
        }}>
            <li className='list'>
                <div className='listSetting'>
                    <span>{id}</span>
                    <img onClick={handleClick} style={{ width: '20px', height: '20px' }} src='../../public/images/setting.png' />
                    <ul className='listBtn'>
                        <li>수정</li>
                        <li>제거</li>
                    </ul>
                </div>
                <h2 className='listName'>{name}</h2>
                <h4 className='listSubname'>{subname}</h4>
                <div className='listInfo'>
                    <div>
                        <img></img>
                        <span>{host}님 외 몇 명</span>
                    </div>
                    <span>4 / {limit}명</span>
                </div>
            </li>
        </Link>
    );
}

export default List;