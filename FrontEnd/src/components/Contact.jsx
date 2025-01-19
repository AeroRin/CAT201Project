import { Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';

const Contact = () => {
  return (
    <div className='py-8 lg:py-16'>
      <div className='container'>
        <div className='mb-8'>
          <Link to='/' className='text-primary-foreground/50 hover:text-primary-foreground'>
            Home
          </Link>{' '}
          <span className='px-2'>/</span> Contact
        </div>
        <div className='flex flex-col md:flex-row -mx-5 gap-y-8'>
          <div className='w-full md:w-2/5 flex flex-col px-5'>
            <div className='py-5 px-8 shadow-[0px_0px_5px] rounded shadow-primary-foreground/20 flex-1'>
              <div className='space-y-4'>
                <div className='flex items-center gap-4'>
                  <span className='inline-block bg-[#DB4444] p-2 rounded-full'>
                    <Phone className='text-white w-5 h-5' />
                  </span>
                  <span className='text-lg font-semibold'>Call To Us</span>
                </div>

                <p>We are available 24/7, 7 days a week.</p>
                <p>Phone: +6014-2763178</p>
              </div>
              <div className='py-5'>
                <div className='border-0 border-b border-solid border-primary-foreground'></div>
              </div>
              <div className='space-y-4'>
                <div className='flex items-center gap-4'>
                  <span className='inline-block bg-[#DB4444] p-2 rounded-full'>
                    <Mail className='text-white w-5 h-5' />
                  </span>
                  <span className='text-lg font-semibold'>Write To Us</span>
                </div>

                <p>Fill out our form and we will contact you within 24 hours.</p>
                <p>Emails: customer@bean&brew.com</p>
                <p>Emails: support@bean&brew.com</p>
              </div>
            </div>
          </div>

          <div className='w-full md:w-3/5 flex flex-col px-5'>
            <div className='p-8 shadow-[0px_0px_5px] rounded shadow-primary-foreground/20 flex-1'>
              <form>
                <div className='grid lg:grid-cols-3 gap-5'>
                  <div>
                    <input
                      type='text'
                      required
                      className='py-2 px-4 text-black bg-[#f5f5f5] w-full rounded'
                      placeholder='Your Name'
                    />
                  </div>
                  <div>
                    <input
                      type='text'
                      required
                      className='py-2 px-4 text-black bg-[#f5f5f5] w-full rounded'
                      placeholder='Your Email'
                    />
                  </div>
                  <div>
                    <input
                      type='text'
                      required
                      className='py-2 px-4 text-black bg-[#f5f5f5] w-full rounded'
                      placeholder='Your Phone'
                    />
                  </div>
                  <div className='lg:col-span-3'>
                    <textarea
                      className='py-2 px-4 text-black bg-[#f5f5f5] w-full rounded min-h-40'
                      placeholder='Your Message'
                    />
                  </div>
                </div>
                <div className='mt-4 text-right'>
                  <Button
                    type='submit'
                    className='!bg-[#DB4444] text-white rounded h-12 px-7 rounded inline-flex justify-center items-center'>
                    Send Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
