import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';

const Cart = () => {
  return (
    <div className='py-8 lg:py-16'>
      <div className='container'>
        <div className='mb-8'>
          <Link to='/' className='text-primary-foreground/50 hover:text-primary-foreground'>
            Home
          </Link>{' '}
          <span className='px-2'>/</span> Cart
        </div>

        <div className='space-y-7 mb-8'>
          <div className='items-center justify-center py-5 px-8 shadow-[0px_0px_5px] rounded shadow-primary-foreground/20 hidden md:flex'>
            <div className='w-1/4'>
              <p>Product</p>
            </div>
            <div className='w-1/4'>
              <p className='text-center'>Price</p>
            </div>
            <div className='w-1/4'>
              <p className='text-center'>Quantity</p>
            </div>
            <div className='w-1/4'>
              <p className='text-right'>Subtotal</p>
            </div>
          </div>

          <div className='flex items-center justify-center flex-col md:flex-row gap-y-5 py-5 px-4 md:px-8 shadow-[0px_0px_5px] rounded shadow-primary-foreground/20'>
            <div className='w-full md:w-1/4'>
              <div className='flex items-center justify-between'>
                <span className='md:hidden'>Product: </span>
                <div className='flex items-center gap-5'>
                  <div className='w-10 h-10 inline-block bg-white'>
                    <img
                      src='/assets/images/lcd-monitor.png'
                      alt='LCD Monitor'
                      className='w-full h-full object-contain'
                    />
                  </div>
                  <span>LCD Monitor</span>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/4'>
              <div className='flex items-center justify-between md:justify-center'>
                <span className='md:hidden'>Price: </span>
                <p className='text-center'>$650</p>
              </div>
            </div>
            <div className='w-full md:w-1/4'>
              <div className='flex items-center justify-between md:justify-center'>
                <span className='md:hidden'>Quantity: </span>
                <div className='text-center'>
                  <div className='p-1 border border-solid border-primary-foreground w-40 inline-flex items-center justify-between rounded-lg'>
                    <Button size='icon' className='!bg-primary-foreground text-primary'>
                      <Minus />
                    </Button>
                    <span>1</span>
                    <Button size='icon' className='!bg-primary-foreground text-primary'>
                      <Plus />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/4'>
              <div className='flex items-center justify-between md:justify-end'>
                <span className='md:hidden'>Subtotal: </span>
                <p className='text-right'>$650</p>
              </div>
            </div>
          </div>

          <div className='flex items-center justify-center flex-col md:flex-row gap-y-5 py-5 px-4 md:px-8 shadow-[0px_0px_5px] rounded shadow-primary-foreground/20'>
            <div className='w-full md:w-1/4'>
              <div className='flex items-center justify-between'>
                <span className='md:hidden'>Product: </span>
                <div className='flex items-center gap-5'>
                  <div className='w-10 h-10 inline-block bg-white'>
                    <img src='/assets/images/gamepad.png' alt='H1 Gamepad' className='w-full h-full object-contain' />
                  </div>
                  <span>H1 Gamepad</span>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/4'>
              <div className='flex items-center justify-between md:justify-center'>
                <span className='md:hidden'>Price: </span>
                <p className='text-center'>$550</p>
              </div>
            </div>
            <div className='w-full md:w-1/4'>
              <div className='flex items-center justify-between md:justify-center'>
                <span className='md:hidden'>Quantity: </span>
                <div className='text-center'>
                  <div className='p-1 border border-solid border-primary-foreground w-40 inline-flex items-center justify-between rounded-lg'>
                    <Button size='icon' className='!bg-primary-foreground text-primary'>
                      <Minus />
                    </Button>
                    <span>1</span>
                    <Button size='icon' className='!bg-primary-foreground text-primary'>
                      <Plus />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            <div className='w-full md:w-1/4'>
              <div className='flex items-center justify-between md:justify-end'>
                <span className='md:hidden'>Subtotal: </span>
                <p className='text-right'>$1100</p>
              </div>
            </div>
          </div>
        </div>
        <div className='mb-12'>
          <Link to='/product' className='border border-solid border-primary-foreground px-5 py-3 inline-block rounded'>
            Return To Shop
          </Link>
        </div>
        <div className='grid gap-7 md:grid-cols-2'>
          <div className='flex gap-3 flex-col md:flex-row'>
            <input
              type='text'
              placeholder='Coupon Code'
              className='border border-black border-solid py-2 px-3 rounded text-black h-12 w-full md:w-60'
            />
            <Button className='!bg-[#DB4444] text-white h-12 px-7 rounded'>Apply Coupon</Button>
          </div>

          <div className='border border-solid border-primary-foreground rounded py-5 px-6'>
            <h5 className='font-medium text-xl mb-2'>Cart Total</h5>
            <div>
              <div className='flex items-center justify-between py-4 border-0 border-b border-solid border-primary-foreground/50 text-lg'>
                <span>Subtotal:</span> <span>$1750</span>
              </div>

              <div className='flex items-center justify-between py-4 border-0 border-b border-solid border-primary-foreground/50 text-lg'>
                <span>Shipping:</span> <span>Free</span>
              </div>

              <div className='flex items-center justify-between py-4 text-lg'>
                <span>Total:</span> <span>$1750</span>
              </div>
            </div>
            <div className='text-center'>
              <Button as-child>
                <Link
                  to='/checkout'
                  className='!bg-[#DB4444] text-white rounded h-12 px-7 rounded inline-flex justify-center items-center'>
                  Proceed to checkout
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
