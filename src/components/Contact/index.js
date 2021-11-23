import React, { useState, useEffect } from 'react';

export default function Contact() {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const handleNameInput = (e) => {
        setName(e.target.value);
    }

    const handleEmailInput = (e) => {
        setEmail(e.target.value);
    }

    const handleMessageInput = (e) => {
        setMessage(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    }

    return (
        <div className="contact">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={handleNameInput} name="name" placeholder="name" />
                </label>
                <label>
                    Email:
                    <input type="text" value={email} onChange={handleEmailInput} name="email" placeholder="email" />
                </label>
                <label>
                    Message:
                    <textarea value={message} onChange={handleMessageInput} />
                </label>
                <input type="submit"></input>
            </form>
        </div>
    );
}