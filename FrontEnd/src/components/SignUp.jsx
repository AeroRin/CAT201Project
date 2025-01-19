import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import axios from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    if (!name || !email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    try {
      const response = await axios.post('/SignupServlet', {
        name,
        email,
        password,
      }, {
        baseURL: 'http://localhost:8080/Backend_Project',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.status === 'success') {
        alert(response.data.message);
        navigate('/login');
      } else {
        setErrorMessage(response.data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setErrorMessage(error.response?.data?.message || 'An error occurred during signup. Please try again later.');
    }
  };

  return (
    <div className='py-8 lg:py-16 text-primary-foreground'>
      <div className='flex flex-col lg:flex-row items-center gap-7 lg:gap-0'>
        <div className='w-full lg:w-1/2'>
          <img src='/assets/images/sign-up.png' alt='Sign Up' />
        </div>
        <div className='w-full lg:w-1/2 px-4 text-xl lg:px-16'>
          <div>
            <div className='mb-5'>
              <h5 className='font-medium text-xl lg:text-3xl mb-3'>Create an account</h5>
              <p className='font-light text-lg'>Enter your details below</p>
            </div>
            <form className='mb-5' onSubmit={handleSubmit}>
              <div className='space-y-5'>
                <div>
                  <input
                    type='text'
                    className='w-full border-0 border-b border-solid border-primary-foreground text-primary-foreground bg-transparent text-lg placeholder:text-lg py-2 placeholder:font-light font-normal'
                    placeholder='Name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type='email'
                    className='w-full border-0 border-b border-solid border-primary-foreground text-primary-foreground bg-transparent text-lg placeholder:text-lg py-2 placeholder:font-light font-normal'
                    placeholder='Email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div>
                  <input
                    type='password'
                    className='w-full border-0 border-b border-solid border-primary-foreground text-primary-foreground bg-transparent text-lg placeholder:text-lg py-2 placeholder:font-light font-normal'
                    placeholder='Password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                {errorMessage && (
                  <div className='text-red-600 text-sm'>{errorMessage}</div>
                )}

                <div>
                  <Button type="submit" className='w-full !bg-[#DB4444] text-white'>
                    Create Account
                  </Button>
                </div>
              </div>
            </form>

            <div>
              <p className='text-center text-lg font-light'>
                Already have account?{' '}
                <Link to='/login' className='underline'>
                  Log in
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
