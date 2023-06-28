import React from 'react';
import { Link } from 'react-router-dom';
import './navstyle.css';

const Logout = ({ handleLogout }) => {
  const confirmLogout = (event) => {
    const shouldLogout = window.confirm('Are you sure you want to log out?');
    if (!shouldLogout) {
      event.preventDefault();
    } else {
      handleLogout();
    }
  };
  return (
    <div className="style" style={{ display: 'flex', justifyContent: 'flex-end', paddingRight:'200px' }}>
      <Link to="/" className="badge text-dark logout-icon fs-5" style={{ backgroundColor: '#D0F5BE' }} onClick={confirmLogout}>
        Logout
      </Link>
    </div>

  );
};

export default Logout;


// import React, { useState } from 'react';
// import { CgLogOut } from 'react-icons/cg';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';

// const Logout = ({ handleLogout }) => {
//   const [showModal, setShowModal] = useState(false);

//   const handleCloseModal = () => setShowModal(false);
//   const handleShowModal = () => setShowModal(true);

//   const handleConfirmLogout = () => {
//     handleLogout();
//     setShowModal(false);
//   };

//   return (
//     <div className="bg-dark">
//       <Link to="/" className="logout-icon" onClick={handleShowModal}>
//         <CgLogOut size={20} color={'white'} />
//         <div className="logout">Logout</div>
//       </Link>

//       <Modal show={showModal} onHide={handleCloseModal} backdrop="static" keyboard={false}>
//         <Modal.Header closeButton>
//           <Modal.Title>Confirm Logout</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>Are you sure you want to log out?</Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Cancel
//           </Button>
//           <Button variant="primary" onClick={handleConfirmLogout}>
//             Logout
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </div>
//   );
// };

// export default Logout;

