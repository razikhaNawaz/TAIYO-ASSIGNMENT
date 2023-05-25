import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../redux/contactSlice';
// import { deleteContact } from '../actions/contactActions';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteContact(id));
  };

  return (
    <frameElement>
    {contacts.length!=0 ?
    <ul className="list-group">
      {contacts.map(contact => (
        <li className="list-group-item" key={contact.id}>
          <span>{contact.name}</span>
          <span className="float-end">
            <button
              className="btn btn-sm btn-info me-2"
              onClick={() => console.log('View details', contact.id)} 
            >
              View Detail
            </button>
            <button
              className="btn btn-sm btn-danger"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </button>
          </span>
        </li>
      ))}
    </ul> :<p>No. contact</p>
}
</frameElement>
  );
};

export default ContactList;
