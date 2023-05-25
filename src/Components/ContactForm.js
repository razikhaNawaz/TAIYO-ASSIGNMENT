import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addContact } from '../redux/contactSlice';
import { useNavigate } from 'react-router-dom';
// import { addContact } from '../actions/contactActions';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useDispatch();
  const navigate=useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
    const id=Math.random().toFixed(4)
    dispatch(addContact({ name, phone,id }));
    setName('');
    setPhone('');
    navigate('/')
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="mb-3">
        <label htmlFor="phone" className="form-label">Phone</label>
        <input
          type="tel"
          className="form-control"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
      </div>
      <button type="submit" className="btn btn-primary" >Add Contact</button>
    </form>
  );
};

export default ContactForm;
