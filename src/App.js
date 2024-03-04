import './App.css';
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { PlusCircle, Edit, Trash } from "react-feather";

// Define a blank user object with empty string properties
const blankUser = {
 "name": "",
 "email": "",
 "role": "",
 "address": ""
}

function App() {
 // Initialize state variables
 const [open, setOpen] = useState(false); // Modal open/close flag
 const [user, setUser] = useState(blankUser); // Individual user data object
 const [userdata, setUserdata] = useState([]); // Array of user data objects
 const [action, setAction] = useState('Add'); // Action type (add or edit)
 const [editIndex, setEditIndex] = useState(null); // Index of the user to be edited

 // Functions for opening and closing the modal
 const onOpenModal = () => setOpen(true);
 const onCloseModal = () => {
   setOpen(false);
   setAction('Add');
 }

 // Function for adding a new user
 const addUser = () => {
   setUserdata([...userdata, user]); // Add new user object to userdata array
   setUser(blankUser); // Reset user object to blank user
   onCloseModal(); 
 }

 // Function for editing a user
 const editUser = (index) => {
   setAction('Edit'); 
   const selectedUser = userdata.find((x, i) => i === index); // Find user object at the given index
   setUser(selectedUser); // Set user object to the selected user
   setEditIndex(index); // Set the index of the user to be edited
   onOpenModal(); 
 }

 // Function for updating a user
 const updateUser = () => {
   const newUsers = userdata.map((x, i) => {
     if (i === editIndex) {
       x = user; // Replace the user object at the given index with the updated user object
     }
     return x;
   });
   setUserdata(newUsers); // Update the userdata array with the new array of user objects
   setUser(blankUser); // Reset user object to blank user
   onCloseModal(); 
 }

 // Function for deleting a user
 const deleteUser = (index) => {
   const newUsers = userdata.filter((x, i) => {
     return i !== index; // Filter out the user object at the given index
   });
   setUserdata(newUsers); // Update the userdata array with the new array of user objects
 }


  return (
    <div className="container">
      <div className='d-flex'>
        <h1>CRUD APP</h1>
      </div>
      <div className='toolbar'>
        <button className='btn' onClick={onOpenModal}>
          <PlusCircle size={16}></PlusCircle>
          <span>Add</span>
        </button>
      </div>
      <hr />

      {/* <p>{JSON.stringify(userdata)}</p> */}
      <table>
        <thead>
          <tr>
            <th>NAME</th>
            <th>EMAIL</th>
            <th>ROLE</th>
            <th>Address</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {userdata.length > 0 && userdata.map((user, index) => {
            return (
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>{user.address}</td>
                <td>
                  <button className='btn m12' onClick={() => editUser(index)}>
                    <Edit size={16}>Edit</Edit>
                    <span>Edit</span>
                  </button>
                  <button className='btn m12' onClick={() => deleteUser(index)}>
                    <Trash size={16}>Delete</Trash>
                    <span>Edit</span>
                  </button>
                </td>
              </tr>)
          })}

        </tbody>
      </table>

      <Modal open={open} onClose={onCloseModal} center>
        <h2>{action} User</h2>
        {/* <p>{JSON.stringify(user)}</p> */}
        <div className='form'>
          <label htmlFor='name'>Name:</label>
          <input type="text" value={user.name} onChange={(e) => setUser({ ...user, 'name': e.target.value })} required /><br />
          <label htmlFor='email'>Email:</label>
          <input type="email" value={user.email} onChange={(e) => setUser({ ...user, 'email': e.target.value })} required /><br />
          <label htmlFor='role'>Role:</label>
          <input type='text' value={user.role} onChange={(e) => setUser({ ...user, 'role': e.target.value })} />
          <br />
          <label htmlFor='address'>Address:</label>
          <textarea name='address' value={user.address} id='' cols="30" rows="5" onChange={(e) => setUser({ ...user, 'address': e.target.value })} ></textarea>

          {action === 'Add' && <button className='btn' onClick={() => addUser()}>Submit</button>}
          {action === 'Edit' && <button className='btn' onClick={() => updateUser()}>Update</button>}
        </div>
      </Modal>
    </div>
  );
}

export default App;
