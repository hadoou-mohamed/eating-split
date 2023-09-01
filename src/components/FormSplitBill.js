import React from 'react'
import Button from './Button'
import { useState } from 'react'

const FormSplitBill = ({ selectedFriend, onSplitBill }) => {
    // Create States :
    const [bill, setBill] = useState('')
    const [paidByUser, setPaidByUser] = useState('')
    const paidByFriend = bill ? bill - paidByUser : ""
    const [whoIsPaid, setWhoIsPaid] = useState('user')
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!bill || !paidByUser ) return;
        onSplitBill(whoIsPaid === 'user' ? paidByFriend : -paidByFriend);
        setBill('')
        setPaidByUser('')
        setWhoIsPaid('user')
    }


    return (
        <form className='form-split-bill' onSubmit={handleSubmit}>
            <h2> Split a bill with {selectedFriend.name}</h2>
            <label>💲 Bill value</label>
            <input type='text' value={bill} onChange={(e) => { setBill(+e.target.value) }} />
            <label>🧔 Your expense</label>
            <input type='text' value={paidByUser} onChange={(e) => { setPaidByUser(+e.target.value > bill ? paidByUser : +e.target.value) }} />
            <label>👭 {selectedFriend.name}'s expense</label>
            <input type='text' value={paidByFriend} disabled />
            <label>🤑 who is paying the bill</label>
            <select value={whoIsPaid} onChange={(e) => { setWhoIsPaid(e.target.value) }}>
                <option value='user'>you</option>
                <option value='friend'>{selectedFriend.name}</option>
            </select>
            <Button>
                Split bill
            </Button>
        </form>
    )
}

export default FormSplitBill