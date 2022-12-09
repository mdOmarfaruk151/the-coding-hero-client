import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { useRef } from 'react';
import { FaUser } from 'react-icons/fa';
import { Image } from 'react-bootstrap';

const Profile = () => {
    const {user} = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName);
    const photoURLRef = useRef(user?.photoURL);

    const handleSubmit = event =>{
        event.preventDefault();
        console.log(name);
        console.log(photoURLRef.current.value);
    }

    const handleNameChange = event =>{
        setName(event.target.value)
    }
    return (
        <div className='container mt-2 mb-5 dark:border-sky-600 border-2 rounded-md border-gray-500 pl-5 p-5 shadow-2xl'>
              
      <hr />
      <h4 className="text-center">Your Profile</h4>
      <hr />
      <div className="text-center">
        {user?.photoURL ? (
          <Image style={{ height: "150px" }} src={user?.photoURL} className='mx-auto'></Image>
        ) : (
          <FaUser></FaUser>
        )}
        <p>
          <small>Profile Picture</small>
        </p>
      </div>

            <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control defaultValue={user?.email} readOnly type="email" placeholder="Enter email" />
        
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Your Name</Form.Label>
        <Form.Control onChange={handleNameChange} defaultValue={name} type="text" placeholder="Name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control ref={photoURLRef} defaultValue={user?.photoURL} type="text" placeholder="Photo URL" />
      </Form.Group>

      {/* <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group> */}
     
      <Button variant="primary" type="submit">
        Save
      </Button>
    </Form>
        </div>
    );
};

export default Profile;