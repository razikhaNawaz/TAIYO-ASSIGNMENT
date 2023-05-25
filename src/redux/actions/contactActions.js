// contactActions.js
let nextContactId = 1;

export const addContact = (contact) => ({
  type: 'ADD_CONTACT',
  payload: {
    id: nextContactId++,
    ...contact,
  },
});

export const deleteContact = (id) => ({
  type: 'DELETE_CONTACT',
  payload: id,
});
