import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';

const Checkout = () => {
  return (
    <div className='py-8 lg:py-16 text-'>
      <div className='container'>
        <div className='mb-8'>
          <Link to='/' className='text-primary-foreground/50 hover:text-primary-foreground'>
            Home
          </Link>{' '}
          <span className='px-2'>/</span> Checkout
        </div>

        <div>
          <h5 className='text-2xl lg:text-3xl font-medium'>Billing Details</h5>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
