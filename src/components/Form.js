import { useState } from 'react'
import Button from './Button'

const Form = ({ onAddfriend }) => {
    const [name, setName] = useState((''))
    const [image, setImage] = useState('https://i.pravatar.cc/48?u=499476')
    const handleName = (e) => setName(e.target.value)
    const handleImage = (e) => setImage(e.target.value)
    const id = crypto.randomUUID();

    const handleSubmit = (e) => {
        if (!name || !image) return;
        e.preventDefault();
        const newFriend = {
            name, image: `${image}?=${id}`, balance: 0, id,
        }
        onAddfriend(newFriend)
    
        setName('');
        setImage('https://i.pravatar.cc/48?u=499476');

    }

    return (
        <form className='form-add-friend' onSubmit={handleSubmit}>
            <label>🤟 Friend name</label>
            <input type='text' value={name} onChange={handleName} />
            <label>🖼 Image URL </label>
            <input type='text' value={image} onChange={handleImage} />
            <Button >
                ADD
            </Button>
        </form>
    )
}

export default Form