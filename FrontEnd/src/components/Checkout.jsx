import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useSelector, useDispatch } from 'react-redux';
import { resetItems } from '@/store/Slices/cartSlice';
import { useNavigate } from 'react-router';
import { useToast } from '@//hooks/use-toast';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const { toast } = useToast();

  const totalCartItemPrice = cartItems.reduce((total, curr) => total + curr.quantity * curr.price, 0);

  const placeOrderHandler = () => {
    dispatch(resetItems());
    toast({
      description: `Place order succeed. Have a nice shopping.`,
      variant: 'success',
    });
    navigate('/product');
  };

  return (
    <div className='py-8 lg:py-16'>
      <div className='container'>
        <div className='mb-8'>
          <Link to='/' className='text-primary-foreground/50 hover:text-primary-foreground'>
            Home
          </Link>{' '}
          <span className='px-2'>/</span> Checkout
        </div>

        <div>
          <h5 className='text-2xl lg:text-3xl font-medium mb-5'>Billing Details</h5>

          <div className='grid gap-7 md:grid-cols-2'>
            <div className='lg:pr-4 lg:pr-8'>
              <div className='space-y-7'>
                <div>
                  <label htmlFor='first-name' className='block mb-2 text-primary-foreground/50'>
                    First Name <span className='text-red-500'>*</span>
                  </label>
                  <input type='text' required className='py-2 px-4 text-black bg-[#f5f5f5] w-full rounded' />
                </div>

                <div>
                  <label htmlFor='company-name' className='block mb-2 text-primary-foreground/50'>
                    Company Name
                  </label>
                  <input type='text' className='py-2 px-4 text-black bg-[#f5f5f5] w-full rounded' />
                </div>

                <div>
                  <label htmlFor='street-address' className='block mb-2 text-primary-foreground/50'>
                    Street Address <span className='text-red-500'>*</span>
                  </label>
                  <input type='text' required className='py-2 px-4 text-black bg-[#f5f5f5] w-full rounded' />
                </div>

                <div>
                  <label htmlFor='apartment' className='block mb-2 text-primary-foreground/50'>
                    Apartment, floor, etc. (optional)
                  </label>
                  <input type='text' className='py-2 px-4 text-black bg-[#f5f5f5] w-full rounded' />
                </div>

                <div>
                  <label htmlFor='town-city' className='block mb-2 text-primary-foreground/50'>
                    Town / City <span className='text-red-500'>*</span>
                  </label>
                  <input type='text' required className='py-2 px-4 text-black bg-[#f5f5f5] w-full rounded' />
                </div>

                <div>
                  <label htmlFor='phone' className='block mb-2 text-primary-foreground/50'>
                    Phone Number <span className='text-red-500'>*</span>
                  </label>
                  <input type='tel' required className='py-2 px-4 text-black bg-[#f5f5f5] w-full rounded' />
                </div>

                <div>
                  <label htmlFor='email-address' className='block mb-2 text-primary-foreground/50'>
                    Email Address <span className='text-red-500'>*</span>
                  </label>
                  <input type='email' required className='py-2 px-4 text-black bg-[#f5f5f5] w-full rounded' />
                </div>
              </div>

              <div className='flex items-center space-x-2 mt-7'>
                <Checkbox className='border-primary-foreground border border-solid !bg-white !text-black' />
                <label className='leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 leading-snug'>
                  Save this information for faster check-out next time
                </label>
              </div>
            </div>

            <div className='lg:pl-4 xl:pl-8'>
              <div>
                <div className='space-y-8 mb-2'>
                  {cartItems.length &&
                    cartItems.map((cartItem) => (
                      <div key={cartItem.id} className='flex items-center justify-between'>
                        <div className='flex items-center gap-5'>
                          <div className='w-14 h-14 inline-block bg-white'>
                            <img src={cartItem.imageUrl} alt={cartItem.name} className='w-full h-full object-contain' />
                          </div>
                          <span>{cartItem.name}</span>
                        </div>
                        <p className='text-lg'>RM {cartItem.price * cartItem.quantity}</p>
                      </div>
                    ))}
                </div>

                <div className='flex items-center justify-between py-4 border-0 border-b border-solid border-primary-foreground/50 text-lg'>
                  <span>Subtotal:</span> <span>RM {totalCartItemPrice}</span>
                </div>

                <div className='flex items-center justify-between py-4 border-0 border-b border-solid border-primary-foreground/50 text-lg'>
                  <span>Shipping:</span> <span>Free</span>
                </div>

                <div className='flex items-center justify-between py-4 text-lg'>
                  <span>Total:</span> <span>RM {totalCartItemPrice}</span>
                </div>
              </div>
              <div>
                <RadioGroup className='space-y-4'>
                  <div className='flex items-center gap-5 justify-between'>
                    <div className='flex items-center space-x-2'>
                      <RadioGroupItem value='bank' className='bg-white text-black border-black border border-solid' />
                      <Label>Bank</Label>
                    </div>
                    <img src='/assets/images/visa.png' alt='visa' className='w-56 h-auto' />
                  </div>

                  <div className='flex items-center space-x-2'>
                    <RadioGroupItem
                      value='cash on delivery'
                      className='bg-white text-black border-black border border-solid'
                    />
                    <Label>Cash on delivery</Label>
                  </div>
                </RadioGroup>
              </div>
              <div className='flex gap-3 flex-col md:flex-row mt-5'>
                <input
                  type='text'
                  placeholder='Coupon Code'
                  className='border border-black border-solid py-2 px-3 rounded text-black h-12 w-full md:w-60'
                />
                <Button className='!bg-[#DB4444] text-white h-12 px-7 rounded'>Apply Coupon</Button>
              </div>
              <div className='mt-5'>
                <Button
                  className='!bg-[#DB4444] text-white rounded h-12 px-7 rounded inline-flex justify-center items-center'
                  onClick={placeOrderHandler}>
                  Place Order
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Checkout;
