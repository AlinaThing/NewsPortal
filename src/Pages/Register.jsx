import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import './weather.css';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState('');

  const submit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://librarymgmt.hamrosystem.com/api/Authenticate/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        email,
        password
      })
    });

    const content = await response.json();
    if (response.status === 200) {
      setModalMessage('Registration successful!');
      setShowModal(true);
     
    } else if (response.status === 409) {
      setModalMessage('User already registered.');
      setShowModal(true);
      // window.location.reload(); // Refresh the page
    } else {
      setModalMessage('Registration failed. Please try again.');
      setShowModal(true);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setModalMessage('');
    window.location.reload(); // Refresh the page
  };

  return (
    <>
      <div className='register'>
        <div className='container'>
          <div className='row justify-content-center pb-3 pt-1'>
            <div className='col col-md-6 col-lg-8 col-xl-6'>
              <main className="form-signin w-100 m-auto my-5 border border-5 border-seconday rounded rounded-5 p-5 shadow-lg">
                <form onSubmit={submit}>
                  <h1 className="h3 mb-3 fw-normal">Please Register</h1>
                  <div className="form-floating mb-1">
                    <input type="text" className="form-control" id="floatingUsername" placeholder="Username" onChange={(e) => setUsername(e.target.value)}/>
                    <label htmlFor="floatingUsername">Username</label>
                  </div>
                  <div className="form-floating mb-1">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="floatingInput">Email address</label>
                  </div>
                  <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword"
                      placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div className="checkbox mb-3">
                    <label>
                      <input type="checkbox" value="remember-me" required /> I accept the terms and conditions.
                    </label>
                  </div>

                  <button className="w-100 btn btn-lg" type="submit" style={{backgroundColor:'#79E0EE', text:'black'}}>
                    Register
                  </button>

                  <div className='d-flex justify-content-between'>
                    <span>
                      Already have an account? <Link to='/signin' style={{text:'#79E0EE'}}>Sign in</Link>
                    </span>
                  </div>
                </form>
              </main>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Registration Status</Modal.Title>
        </Modal.Header>
        <Modal.Body>{modalMessage}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Register;
