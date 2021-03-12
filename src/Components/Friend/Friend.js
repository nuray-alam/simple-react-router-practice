import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'
const Friend = (props) => {
    const { name, email, id } = props.friend;
    const history = useHistory();
    const handleClick = (friendId) => {
        const url = `friend/${friendId}`
        history.push(url);
    }
    return (
        <div className='friend'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            {/* <p><Link to={`/friend/${id}`}> <button>Show detail</button> </Link> </p> */}
            <button onClick={() => handleClick(id)} >Show Detail</button>
        </div>
    );
};

export default Friend;