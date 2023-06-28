import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './weather.css';
import Time from '../Components/Layout/Time';
import Navbar from '../Components/Layout/Navbar';
const Weather = () => {
    useEffect(() => {
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '887739af9dmshd4b4b6e202fc327p100e0djsncf721d94834f',
                'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com',
            },
        };
        const Submit = document.getElementById('submit');
        const cityName = document.getElementById('cityName');
        const temp = document.getElementById('temp');
        const feels_like = document.getElementById('feels_like');
        const humidity = document.getElementById('humidity');
        const min_temp = document.getElementById('min_temp');
        const max_temp = document.getElementById('max_temp');
        const wind_speed = document.getElementById('wind_speed');
        const sunrise = document.getElementById('sunrise');
        const sunset = document.getElementById('sunset');

        const getWeather = (city) => {
            cityName.innerHTML = city;
            fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
                .then((response) => response.json())
                .then((response) => {
                    console.log(response); // Add this line to check the response data
                    temp.innerHTML = response.temp;
                    feels_like.innerHTML = response.feels_like;
                    humidity.innerHTML = response.humidity;
                    min_temp.innerHTML = response.min_temp;
                    max_temp.innerHTML = response.max_temp;
                    wind_speed.innerHTML = response.wind_speed;
                    sunrise.innerHTML = response.sunrise;
                    sunset.innerHTML = response.sunset;
                })

                .catch((err) => console.error(err));
        };

        Submit.addEventListener('click', (e) => {
            e.preventDefault();
            const cityInput = document.getElementById('city');
            getWeather(cityInput.value);
        });

        getWeather('Kathmandu');
    }, []);
    return (
        <>
            <Time />
            <Navbar />
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="#">
                        {/* Weather */}
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                        <form className="d-flex" role="search">
                            <input id="city" className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit" id="submit">
                                Search
                            </button>
                        </form>
                    </div>

                </div>
            </nav>


            <div className="container">
                <h1 className="my-4 text-center">
                    Weather for <span id="cityName"></span>
                </h1>
                <main>
                    <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-success">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Temperature</h4>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>Temperature is <span id="temp"></span></li>
                                        <li>Min Temperature is <span id="min_temp"></span></li>
                                        <li>Max Temperature is <span id="max_temp"></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-success">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Humidity Info</h4>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mt-3 mb-4" style={{ height: '75px' }}>
                                        <li>Feels Like <span id="feels_like"></span></li>
                                        <li>Humidity is <span id="humidity"></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card mb-4 rounded-3 shadow-sm border-success">
                                <div className="card-header py-3 ">
                                    <h4 className="my-0 fw-normal">Wind Info</h4>
                                </div>
                                <div className="card-body">
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>Wind speed is <span id="wind_speed"></span></li>
                                        <li>Sunrise Time is <span id="sunrise"></span></li>
                                        <li>Sunset Time is <span id="sunset"></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
};

export default Weather;
