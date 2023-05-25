import React from 'react';
import { Link, Route, Router } from 'react-router-dom';
import ContactForm from './ContactForm';

const Sidebar = () => {
  return (
    <div className="sidebar bg-primary text-light" style={{width:'100px',height:'300px',padding:'10px',borderRadius:'5px',marginRight:'10px'}}>
      <ul className="nav flex-column">
      <Link to='/'>
        <li className="nav-item text-light mb-5">
          Home
        </li>
        </Link>
        <Link to='/contactList'>
        <li className="nav-item text-light ml">
          Contact list
        </li>
        </Link>
      </ul>
     
    </div>
  );
};

export default Sidebar;
