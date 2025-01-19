import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';
import { useState, useEffect } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    fetchCartItems();
  }, []);

  const fetchCartItems = async () => {
    try {
      console.log('Fetching cart items...');
      const response = await fetch('http://localhost:8080/Backend_Project/ProductCartServlet');
      const data = await response.json();
      console.log('Cart data received:', data);

      if (data.status === 'success') {
        const itemsWithSubtotal = data.items.map(item => ({
          ...item,
          subtotal: parseFloat((item.price * item.quantity).toFixed(2))
        }));
        setCartItems(itemsWithSubtotal);
        setTotalAmount(data.totalPrice || 0);
      } else {
        console.error('Error fetching cart:', data.message);
      }
    } catch (error) {
      console.error('Error fetching cart items:', error);
    }
  };

  const updateQuantity = async (productId, action) => {
    try {
      const response = await fetch('http://localhost:8080/your-app-name/ProductCartServlet', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          action: action,
          productId: productId
        }),
      });
      const data = await response.json();
      if (data.status === 'success') {
        fetchCartItems();
      }
    } catch (error) {
      console.error('Error updating quantity:', error);
    }
  };

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

          {cartItems.map((item) => (
            <div key={item.id} className='flex items-center justify-center flex-col md:flex-row gap-y-5 py-5 px-4 md:px-8 shadow-[0px_0px_5px] rounded shadow-primary-foreground/20'>
              <div className='w-full md:w-1/4'>
                <div className='flex items-center justify-between'>
                  <span className='md:hidden'>Product: </span>
                  <div className='flex items-center gap-5'>
                    <span>{item.name}</span>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/4'>
                <div className='flex items-center justify-between md:justify-center'>
                  <span className='md:hidden'>Price: </span>
                  <p className='text-center'>${item.price}</p>
                </div>
              </div>
              <div className='w-full md:w-1/4'>
                <div className='flex items-center justify-between md:justify-center'>
                  <span className='md:hidden'>Quantity: </span>
                  <div className='text-center'>
                    <div className='p-1 border border-solid border-primary-foreground w-40 inline-flex items-center justify-between rounded-lg'>
                      <Button 
                        size='icon' 
                        className='!bg-primary-foreground text-primary'
                        onClick={() => updateQuantity(item.id, 'remove')}
                      >
                        <Minus />
                      </Button>
                      <span>{item.quantity}</span>
                      <Button 
                        size='icon' 
                        className='!bg-primary-foreground text-primary'
                        onClick={() => updateQuantity(item.id, 'add')}
                      >
                        <Plus />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='w-full md:w-1/4'>
                <div className='flex items-center justify-between md:justify-end'>
                  <span className='md:hidden'>Subtotal: </span>
                  <p className='text-right'>${item.subtotal}</p>
                </div>
              </div>
            </div>
          ))}
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
                <span>Subtotal:</span> <span>${totalAmount}</span>
              </div>

              <div className='flex items-center justify-between py-4 border-0 border-b border-solid border-primary-foreground/50 text-lg'>
                <span>Shipping:</span> <span>Free</span>
              </div>

              <div className='flex items-center justify-between py-4 text-lg'>
                <span>Total:</span> <span>${totalAmount}</span>
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
