import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './weather.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedData = localStorage.getItem('userData');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);

  const submit = async (e) => {
    e.preventDefault();

    const response = await fetch('http://librarymgmt.hamrosystem.com/api/Authenticate/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username,
        password
      })
    });
    const content = await response.json();

    if (response.status === 200) {
      // login successful, navigate to another page
      navigate("/UserInfo", { state: { username } });
      setData([...data, { username }]);
      localStorage.setItem('userData', JSON.stringify([...data, { username }]));
      setLoginMessage('Login successful!');
    } else {
      // login failed, show error message
      setLoginMessage('Incorrect username or password.');
    }
  };

  return (
    <>
      <div className="login">
        <div className="container mt-3">
          <div className="row justify-content-center pb-5">
            <div className="col col-md-6 col-lg-8 col-xl-6">
              <main className="form-signin w-100 m-auto my-5 border border-5 border-seconday rounded rounded-5 p-5 shadow-lg ">
                <form onSubmit={submit}>
                  <h1 className="h3 mb-3 fw-normal">Please Signin</h1>
                  <div className="form-floating mb-1">
                    <input type="text" className="form-control" id="floatingInput" placeholder="UserName" onChange={(e) => setUsername(e.target.value)}/>
                    <label htmlFor="floatingInput">User Name</label>
                  </div>
                  <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" requiredonChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                  </div>
                  <div className="checkbox mb-3">
                    <label>
                      <input type="checkbox" value="remember-me" required /> Remember me
                    </label>
                  </div>
                  <button className="w-100 btn btn-lg" type="submit" style={{backgroundColor:'#79E0EE', text:'black'}}>Sign in</button>

                  {/* {loginMessage && <p className="text-success">{loginMessage}</p>} */}
                  {loginMessage && <p className="text-danger">{loginMessage}</p>}

                  <div className='d-flex justify-content-between'>
                    <span>Do not have an account? <Link to='/register' style={{text:"#79E0EE"}}>Register</Link></span>
                    {/* <Link to='/forgetpassword' className='text-danger'> Forget password </Link> */}
                  </div>
                </form>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;