import React, { useState } from 'react';

const NameForm = () => {
    const [name, setName] = useState('');

    // Handle change event
    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>React onChange Event Example</h1>
            <form>
                <label htmlFor="nameInput">Enter your name:</label><br />
                <input 
                    type="text" 
                    id="nameInput" 
                    value={name} 
                    onChange={handleChange} 
                    placeholder="Type your name"
                />
            </form>
            <p>Your name is: <strong>{name}</strong></p>
        </div>
    );
};

export default NameForm;