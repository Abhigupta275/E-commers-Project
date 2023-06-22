import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLogIn, setIsLogIn] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        'https://dummyjson.com/auth/login',
        {username: "kminchelle",
         password: "0lelplR"
        }
      );
      const { token } = response.data;
      localStorage.setItem('token', token);

      setUsername('');
      setPassword('');
      console.log(response);
      navigate('/products'); 
    } catch (err) {
      console.log(err);
    }
  };



//   fetch('https://dummyjson.com/auth/login', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify({
    
//     username: 'kminchelle',
//     password: '0lelplR',
//     // expiresInMins: 60, // optional
//   })
// })
// .then(res => res.json())
// .then(console.log);

  return (
    <div className="account-pages">
      <div className="row justify-content-center">
        <div className="col-md-5  mt-5">
          <div className="card card2">
            <div className="row g-0">
              <div className="col-lg-12">
                <div className="p-lg-5 p-4">
                  <div>
                    <h5>Welcome Back!</h5>
                    <p className="text-muted">Sign in</p>
                  </div>
                  <div className="mt-4 pt-3">
                    <form onSubmit={handleSubmit}>
                      <div className="mb-3">
                        <label htmlFor="username" className="fw-semibold">
                          Username
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          autoComplete="off"
                          onChange={(e) => setUsername(e.target.value)}
                          value={userName}
                          id="userName"
                          placeholder="Enter username"
                        />
                      </div>

                      <div className="mb-3 mb-4">
                        <label htmlFor="password" className="fw-semibold">
                          Password
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          onChange={(e) => setPassword(e.target.value)}
                          value={password}
                          autoComplete="off"
                          id="password"
                          placeholder="Enter password"
                        />
                      </div>

                      <div className="row align-items-center">
                        <div className="col-6"></div>
                        <div className="col-6">
                          <div className="text-end">
                            <button
                              className="btn btn-primary w-md waves-effect waves-light"
                              type="submit"
                            >
                              Log In
                            </button>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-5 text-center">
            <p>
              Don't have an account?{' '}
              <a href="/" className="">
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
