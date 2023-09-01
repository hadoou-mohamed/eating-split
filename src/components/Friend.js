import React from 'react'
import Button from './Button'

const Friend = ({ friend, onSelectFriend, selectedFriend }) => {

    const isSelected =  selectedFriend?.id === friend.id;

    return (
        <li className={isSelected ? 'selectFriend' : ''}>
            <img src={friend.image} alt={friend.name} />
            <h3>{friend.name} </h3>
            {/* if the condition is true return element */}
            {friend.balance < 0 && <p className='red'> you owe {friend.name} {Math.abs(friend.balance)}
            </p>}
            {friend.balance > 0 && <p className='green'> owes you{friend.name} {friend.balance}
            </p>}
            {friend.balance === 0 && <p> you and {friend.name} are even
            </p>}

            <Button onClick={() => { onSelectFriend(friend); }}>
                {isSelected ? 'cancel' : 'select'}
            </Button>

        </li>
    )
}

export default Friend