// import logo from './logo.svg';
import './App.css';

import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ContactForm from './Components/ContactForm';
import ContactList from './Components/ContactList';
// import contactReducer from './redux/contactReducer';
import Sidebar from './Components/Sidebar';
import CreateContact from './Components/CreateContact';
import { Route, Router, Routes } from 'react-router-dom';

// const store = createStore(contactReducer);

const App = () => {
  return (
    // <Provider store={store}>
      <div className='App d-flex align-items-center justify-content-center' >
        
      <div className="container mt-5" style={{width:'400px',height:'400px',border:'1px solid grey',borderRadius:'5px'}}>
        <h1>Contact App</h1>
        <div className='d-flex'>
        <Sidebar />
        <Routes>
        {/* <Route path='/' element={} /> */}
        <Route path='/' element={ <CreateContact />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path='/contactList' element={<ContactList />} />
        </Routes>
        </div>
      </div>
      
      </div>
      
    //  </Provider>
  );
};

export default App;


