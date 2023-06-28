import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { MdOutlineWatchLater } from 'react-icons/md';
import './fetch.css';
const FetchBusinessData = () => {
  const [data, setData] = useState([]);
  const [watchLaterList, setWatchLaterList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const savedList = localStorage.getItem('watchLaterList');
    if (savedList) {
      setWatchLaterList(JSON.parse(savedList));
    }
  }, []);
  
  const fetchData = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ebaa75d12f6c4b65bb1c95775a10ccb1");
      setData(response.data.articles);
      setIsLoading(false);
    } catch (error) {
      console.log("Error fetching data:", error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleWatchLaterClick = (each) => {
    const updatedList = [...watchLaterList, each];
    setWatchLaterList(updatedList);
    localStorage.setItem("watchLaterList", JSON.stringify(updatedList));
  };

  return (
    <>
      <div className='style'>
        <div className='container'>
          <div className='row pb-5'>
            {isLoading ? (
              <p className="text-dark">LOADING...</p>
            ) : (
              data.map((eachItem, index) => (
                <div key={index} className='col-md-6'>
                  <div className='container my-3 p-3' style={{ boxShadow: "2px 2px 10px silver", borderRadius: "10px" }}>
                    <h6 className='my-2 text-dark'>{eachItem.title}</h6>
                    <div className='d-flex justify-content-center align-items-center'></div>
                    <img className='img-fluid' src={eachItem.urlToImage} alt="Image not Found" style={{ width: "auto", height: "300px", objectFit: "cover" }} />
                    <p className='my-1 text-dark'style={{fontSize:'12px'}}>{eachItem.content}</p>
                    <div className='d-flex justify-content-evenly'>
                      <Link to={eachItem.url} target='blank' style={{ textDecoration: "none",fontSize:'12px', marginTop: "10px",fontSize:'15px' }}>View More</Link>
                      <button  className='badge'
                        style={{ marginLeft: "150px", marginTop: "10px",backgroundColor:"#FBFFDC",color:'black'}}
                        onClick={() => handleWatchLaterClick(eachItem)}
                      >
                         <span style={{fontSize:'10px'}} >Watch Later </span> <span style={{ marginLeft: "5px" }}><MdOutlineWatchLater/></span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FetchBusinessData;
