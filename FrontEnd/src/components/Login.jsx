import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Login = () => {
  return (
    <div className='py-8 lg:py-16'>
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
              <div className='space-y-5'>
                <div>
                  <input
                    type='text'
                    className='w-full border-0 border-b border-solid border-black text-lg placeholder:text-lg py-2 placeholder:font-light font-normal'
                    placeholder='Email or Phone Number'
                  />
                </div>

                <div>
                  <input
                    type='password'
                    className='w-full border-0 border-b border-solid border-black text-lg placeholder:text-lg py-2 placeholder:font-light font-normal'
                    placeholder='Password'
                  />
                </div>

                <div className='flex items-center justify-between gap-5'>
                  <Button className='!bg-[#DB4444] min-w-28'>Log In</Button>
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
