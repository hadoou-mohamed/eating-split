import React from 'react'
import Friend from './Friend';

const FriendList = ({ friendslist, onSelectFriend, selectedFriend }) => {
    const friends = friendslist;
    return (
        <ul>
            {
                friends.map((friend) => (
                    <Friend friend={friend} key={friend.id} onSelectFriend={onSelectFriend} selectedFriend={selectedFriend} />
                ))
            }
        </ul>
    )
}

export default FriendList