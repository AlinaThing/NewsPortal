import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Time from '../Components/Layout/Time';
import Logout from '../Components/Layout/Logout';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './weather.css';

const UserInfo = () => {
  const location = useLocation();
  const { username } = location.state || '';
  const [watchLaterList, setWatchLaterList] = useState([]);
  const [confirmDeleteIndex, setConfirmDeleteIndex] = useState(null);

  useEffect(() => {
    const storedWatchLaterList = JSON.parse(localStorage.getItem('watchLaterList'));
    if (storedWatchLaterList) {
      setWatchLaterList(storedWatchLaterList);
    }
  }, []);

  const handleDeleteItem = (index) => {
    setConfirmDeleteIndex(index);
  };

  const handleConfirmDelete = () => {
    const updatedList = [...watchLaterList];
    updatedList.splice(confirmDeleteIndex, 1);
    setWatchLaterList(updatedList);
    localStorage.setItem('watchLaterList', JSON.stringify(updatedList));
    setConfirmDeleteIndex(null);
  };

  const handleCancelDelete = () => {
    setConfirmDeleteIndex(null);
  };

  return (
    <div className="info" style={{ paddingBottom: '150px' }}>
      <Time/>
      <hr style={{ margin: '20px auto', width: '100%', borderTop: '1px solid white' }} />
      <div className="text-center">
        <Logout/>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', padding: '20px' }}>
        <p style={{ textAlign: 'center', color: 'black',fontSize:'20px' }}>Welcome {username}</p>
      </div>
      <hr style={{ margin: '20px auto', width: '100%', borderTop: '1px solid white' }} />

      <div>
        <h3 style={{ textAlign: 'center', marginTop: '20px', color: 'black' }}>Watch Later List</h3>

        <div className="table-responsive">
          <table className="table text-dark">
            <thead className="text-start">
              <tr>
                <th scope="col" style={{ width: '10%' }}>
                  S.N
                </th>
                <th scope="col" style={{ width: '20%' }}>
                  Image
                </th>
                <th scope="col" style={{ width: '50%' }}>
                  URL
                </th>
                <th scope="col" style={{ width: '20%' }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {watchLaterList.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>
                    <img src={item.urlToImage} alt="Image" style={{ maxWidth: '100%', height: 'auto' }} />
                  </td>
                  <td>
                    <Link to={item.url}>{item.url}</Link>
                  </td>
                  <td>
                    {confirmDeleteIndex === index ? (
                      <div>
                        <button style={{backgroundColor:'#D0F5BE'}} onClick={handleConfirmDelete}>Yes</button>
                        <button style={{backgroundColor:'#D0F5BE', marginLeft:'10px'}} onClick={handleCancelDelete}>No</button>
                      </div>
                    ) : (
                      <button className="btn btn-link text-danger" onClick={() => handleDeleteItem(index)}>
                        <FontAwesomeIcon icon={faTrash} />
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
