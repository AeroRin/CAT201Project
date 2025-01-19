import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import axios from 'axios';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }

    // Log what we're sending
    console.log('Sending data:', { email, password });

    try {
      const response = await axios.post('/LoginServlet', {
        email: email.trim(),    // Remove any whitespace
        password: password.trim() // Remove any whitespace
      }, {
        baseURL: 'http://localhost:8080/Backend_Project',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      console.log('Response:', response.data); // Log the response

      if (response.data.status === 'success') {
        // Navigate first, then show success message
        navigate('/');
        alert(response.data.message);
      } else {
        setErrorMessage(response.data.message || 'Invalid credentials, please try again.');
      }
    } catch (error) {
      console.error('Error during login:', error);
      if (error.response) {
        console.log('Error response:', error.response.data); // Log error response
      }
      setErrorMessage(error.response?.data?.message || 'An error occurred during login. Please try again later.');
    }
  };

return (
    <div className='py-8 lg:py-16 text-primary-foreground'>
      <div className='flex flex-col lg:flex-row items-center gap-7 lg:gap-0'>
        <div className='w-full lg:w-1/2'>
          <img src='/assets/images/sign-up.jpg' alt='Sign Up' />
        </div>
        <div className='w-full lg:w-1/2 px-4 text-xl lg:px-16'>
          <div>
            <div className='mb-5'>
              <h5 className='font-medium text-xl lg:text-3xl mb-3'>Log in to Exclusive</h5>
              <p className='font-light text-lg'>Enter your details below</p>
            </div>
            <form className='mb-5'>
              {errorMessage && (
                <div className="text-red-500 mb-4">
                  {errorMessage}
                </div>
              )}
              <div className='space-y-5'>
                <div>
                  <input
                    type='text'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full border-0 border-b border-solid border-primary-foreground text-primary-foreground bg-transparent text-lg placeholder:text-lg py-2 placeholder:font-light font-normal'
                    placeholder='Email or Phone Number'
                  />
                </div>

                <div>
                  <input
                    type='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='w-full border-0 border-b border-solid border-primary-foreground text-primary-foreground bg-transparent text-lg placeholder:text-lg py-2 placeholder:font-light font-normal'
                    placeholder='Password'
                  />
                </div>

                <div className='flex items-center justify-between gap-5'>
                  <Button onClick={handleSubmit} className='!bg-[#DB4444] min-w-28 text-white'>Log In</Button>
                  <Link to='#' className='text-[#DB4444] text-base'>
                    Forget Password?
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
