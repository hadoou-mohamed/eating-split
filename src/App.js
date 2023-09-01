import { useState } from 'react'
import FriendList from './components/FriendList';
import Form from './components/Form';
import Button from './components/Button';
import FormSplitBill from './components/FormSplitBill';
const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

const App = () => {
  // create States :
  const [showForm, setShowForm] = useState(false)
  const [friends, setFriends] = useState(initialFriends)
  const [selectedFriend, setSelectedFriend] = useState(null)

  // Define functions :
  const handleSplitBill = (value) => {
    setFriends((friends) => friends.map((friend) => friend.id === selectedFriend.id ? { ...friend, balance: friend.balance + value } : friend))
    setSelectedFriend(null)
  }
  const handelSelectFriend = (selectedfrined) => {
    setSelectedFriend((curr) => curr?.id === selectedfrined.id ? null : selectedfrined);
    setShowForm(false)
  };
  const handelToggle = () => setShowForm(!showForm);
  const handelAddFriend = (newFriend) => { setFriends(items => [...friends, newFriend]); handelToggle() }


  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendList
          friendslist={friends}
          onSelectFriend={handelSelectFriend}
          selectedFriend={selectedFriend}
        />
        {showForm && <Form onAddfriend={handelAddFriend} />}
        <Button onClick={handelToggle} >
          {!showForm ? "ADD Friend" : "Close"}
        </Button>
      </div>
      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} onSplitBill={handleSplitBill} />}
    </div>

  )
}

export default App