import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from './ui/button';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate input
    if (!email || !newPassword) {
      setErrorMessage('Please enter both email and new password.');
      return;
    }

    try {
      const response = await axios.post('/ForgotPasswordServlet', {
        email: email.trim(),
        newPassword: newPassword.trim()
      }, {
        baseURL: 'http://localhost:8080/Backend_Project',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.data.status === 'success') {
        alert('Password updated successfully!');
        navigate('/login');
      } else {
        setErrorMessage(response.data.message || 'Password update failed. Please try again.');
      }
    } catch (error) {
      console.error('Error during password update:', error);
      setErrorMessage(error.response?.data?.message || 'An error occurred. Please try again later.');
    }
  };

  return (
    <div className='py-8 lg:py-16 text-primary-foreground'>
      <div className='flex flex-col lg:flex-row items-center gap-7 lg:gap-0'>
        <div className='w-full lg:w-1/2'>
          <img src='/assets/images/sign-up.jpg' alt='Forgot Password' />
        </div>
        <div className='w-full lg:w-1/2 px-4 text-xl lg:px-16'>
          <div>
            <div className='mb-5'>
              <h5 className='font-medium text-xl lg:text-3xl mb-3'>Reset Password</h5>
              <p className='font-light text-lg'>Enter your email and new password</p>
            </div>
            <form className='mb-5' onSubmit={handleSubmit}>
              <div className='space-y-5'>
                <div>
                  <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='w-full border-0 border-b border-solid border-primary-foreground text-primary-foreground bg-transparent text-lg placeholder:text-lg py-2 placeholder:font-light font-normal'
                    placeholder='Email'
                  />
                </div>

                <div>
                  <input
                    type='password'
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    className='w-full border-0 border-b border-solid border-primary-foreground text-primary-foreground bg-transparent text-lg placeholder:text-lg py-2 placeholder:font-light font-normal'
                    placeholder='New Password'
                  />
                </div>

                {errorMessage && (
                  <div className='text-red-600 text-sm'>{errorMessage}</div>
                )}

                <div>
                  <Button type="submit" className='w-full !bg-[#DB4444] text-white'>
                    Reset Password
                  </Button>
                </div>
              </div>
            </form>

            <div>
              <p className='text-center text-lg font-light'>
                Remember your password?{' '}
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

export default ForgotPassword;