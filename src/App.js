import './App.css';
import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { PlusCircle, Edit, Trash } from "react-feather";
function App() {
  const blankUser = {
    "name": "",
    "email": "",
    "role": "",
    "address": ""

  }


  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(blankUser);
  const [userdata, setUserdata] = useState([]);
  const [action, setAction] = useState('Add');
  const [editIndex, setEditIndex] = useState(null);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => {
    setOpen(false);
    setAction('Add');
  }

  const addUser = () => {
    setUserdata([...userdata, user]);
    setUser(blankUser);
    onCloseModal();
  }

  const editUser = (index) => {
    setAction('Edit');
    const selectedUser = userdata.find((x, i) => i === index);
    setUser(selectedUser);
    setEditIndex(index);
    onOpenModal();
  }

  const updateUser = () => {
    const newUsers = userdata.map((x, i) => {
      if (i === editIndex) {
        x = user;
      }
      return x;
    });
    setUserdata(newUsers);
    setUserdata(newUsers);
    setUser(blankUser);
    onCloseModal();
  }

const deleteUser  = (index) => {
  const newUsers = userdata.filter((x,i) => {return i !== index});
  setUserdata(newUsers);
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
