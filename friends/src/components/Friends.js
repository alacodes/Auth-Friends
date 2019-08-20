import React, {useState, useEffect} from 'react'
import {axiosWithAuth} from '../utilities/axiosAuth'


const Friends = (props) => {

    const [friends, setFriends] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get('http://localhost:5000/api/friends')
            .then(res => {
                console.log('get response', res);
                setFriends(res.data)
            })
            .catch(err => console.log('get error', err))
    }, [])
    return(
        <div>
            <h1>Friends!</h1>
            {friends.map((friend)=><h2>{friend.name}</h2>)}
        </div>
    )
}

export default Friends;