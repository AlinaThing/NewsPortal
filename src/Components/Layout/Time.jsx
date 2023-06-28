import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import './navstyle.css';

const Time = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const currentDayOfWeek = daysOfWeek[currentTime.getDay()];

  // const showTime = `${currentDayOfWeek} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
  const showTime = `${currentDayOfWeek} ${currentTime.getDate()}/${currentTime.getMonth() + 1}/${currentTime.getFullYear()} ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;


  return (
    <>
      <div className='style d-flex'>
        <div className="Time text-dark position-relative pt-3" style={{ paddingLeft: '10%' }}>
          <h2 style={{ fontSize: "30px",color:'#79E0EE'}}>NEWS Hub</h2>
          <h2 style={{ fontSize: '15px', marginTop: '10px' }}>{showTime}</h2>
        </div>

        <div style={{ marginLeft: 'auto', width: '30%',marginRight:'12%' }}>
          <Carousel indicators={false} controls={false} interval={3000} className='mt-2 '>
            <Carousel.Item>
              <img className="d-block rounded-3" src="/Images/trinitycollege.png" alt="First slide" style={{ height: '120px', width: '100%' }} />
            </Carousel.Item>
            <Carousel.Item>
              <img className="d-block rounded-3" src="/Images/pic1.jpg" alt="Second slide" style={{ height: '120px', width: '100%' }} />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Time;
