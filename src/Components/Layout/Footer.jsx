import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineTwitter  } from 'react-icons/ai'
import {  BsFacebook, BsInstagram } from 'react-icons/bs'
import './navstyle.css';
const Footer = () => {
    return (
        <>
            <div className="style container-fluid border">
                <footer className="d-flex flex-wrap justify-content-between align-items-center mb-3 mt-3">
                    <div className="col-md-4 d-flex align-items-center">
                        <Link to="/" className=" me-2 text-body-secondary text-decoration-none lh-1">
                        </Link>
                    </div>
                    <ul className="nav col-md-4 d-flex justify-content-end">
                    <Link to='https://twitter.com/' className='me-3 text-dark'> <AiOutlineTwitter/> </Link>
                    <Link to='https://www.facebook.com/' className='me-3 text-dark'> <BsFacebook/> </Link>
                    <Link to='https://www.instagram.com/' className='me-3 text-dark'>  <BsInstagram/> </Link>
                    </ul>
                </footer>
            </div>
        </>
    )
}

export default Footer