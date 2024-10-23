import React, { useState, useEffect } from 'react';
import './Body.css';



function Body(props) {
    const [contacts, setContacts] = useState([]);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [nameError, setNameError] = useState('');
    const [phoneError, setPhoneError] = useState('');

    useEffect(() => {
        const storedContacts = JSON.parse(localStorage.getItem('contacts')) || [];
        setContacts(storedContacts);
    }, []);

    useEffect(() => {
        if (contacts.length > 0) {
            localStorage.setItem('contacts', JSON.stringify(contacts));
        }
    }, [contacts]);

    const addContact = () => {
        let isValid = true;

        if (!name) {
            setNameError("Ime mora biti ukucano!");
            isValid = false;
        } else {
            setNameError('');
        }

        const transformedName = name.toUpperCase();

        if (!phone) {
            setPhoneError("Broj telefona mora biti ukucan!");
            isValid = false;
        } else if (!/^\d+$/.test(phone)) {
            setPhoneError("Broj telefona mora biti numerički!");
            isValid = false;
        } else {
            setPhoneError('');
        }

        if (isValid) {
            setContacts([...contacts, { name: transformedName, phone }]);
            setName('');
            setPhone('');
        }
    };

    const deleteContact = (index) => {
        const newContacts = contacts.filter((_, i) => i !== index);
        setContacts(newContacts);
        localStorage.setItem('contacts',JSON.stringify(newContacts))
    };

    return (
        <div id="app-body">
            <div id="add-contact" className="contact-container" style={{ marginLeft: -(props.tab - 1) * 100 + '%' }}>
                <div id="add-contact-container">
                    <input type="text" placeholder='Name:' value={name} onChange={(e) => setName(e.target.value)} />
                    {nameError && <p style={{ color: 'red' }}>{nameError}</p>}
                    <input type="text" placeholder='Number:' value={phone} onChange={(e) => setPhone(e.target.value)} />
                    {phoneError && <p style={{ color: 'red' }}>{phoneError}</p>}
                    <button onClick={addContact}>Add contact</button>
                </div>
            </div>
            <div id="phonebook" className="contact-container">
                <div id="phonebook-container">
                    <span className="no-contact-message">No contact</span>
                    <ul className="contact-list">
                        {contacts.map((contact, index) => (
                            <li key={index}>
                                {contact.name} - {contact.phone}
                                <button id='delete-btn' onClick={() => deleteContact(index)}>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}





export default Body;

