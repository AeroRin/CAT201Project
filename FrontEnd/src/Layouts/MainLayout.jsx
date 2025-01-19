import { Outlet, Link } from 'react-router-dom';
import {
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Menu,
  Search,
  SendHorizontal,
  ShoppingCart,
  Twitter,
  User,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet';

const MainLayout = () => {
  return (
    <div>
      <header className='border-0 border-b border-solid border-primary/30 sticky top-0 bg-primary-foreground z-50'>
        <div className='bg-primary-foreground text-center text-primary px-5 py-2'>
          <p>
            Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!{' '}
            <Link to='/product' className='underline'>
              Shop Now
            </Link>
          </p>
        </div>
        <div className='bg-primary text-primary-foreground'>
          <div className='container py-5'>
            <div className='flex items-center justify-between gap-3'>
              <Link to='/'>
                <img src='./src/assets/logo.jpg' alt='logo' className='w-16 h-16 md:w-24 md:h-24' />
              </Link>

              <div className='items-center justify-center gap-7 hidden lg:flex'>
                <Link to='/' className='py-0.5 border-0 !border-b border-primary border-solid'>
                  <h6>Home</h6>
                </Link>

                <Link to='/contact' className='py-0.5'>
                  <h6>Contact</h6>
                </Link>

                <Link to='/about' className='py-0.5'>
                  <h6>About</h6>
                </Link>

                <Link to='/sign-up' className='py-0.5'>
                  <h6>Sign Up</h6>
                </Link>
              </div>

              <div className='flex items-center justify-center gap-5'>
                <div className='items-center justify-center hidden lg:flex'>
                  <input
                    className='bg-[#f5f5f5] w-56 h-12 py-2 px-3 border border-[#f5f5f5] border-solid transition placeholder:text-black/30 text-black'
                    type='text'
                    placeholder='What are you looking for?'
                  />
                  <button className='w-12 h-12 inline-flex justify-center items-center bg-[#f5f5f5] text-black'>
                    <Search />
                  </button>
                </div>

                <button>
                  <Heart />
                </button>

                <Link to='/cart'>
                  <ShoppingCart />
                </Link>

                <button>
                  <User />
                </button>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button size='icon' className='lg:hidden !bg-primary-foreground !text-primary'>
                      <Menu />
                    </Button>
                  </SheetTrigger>
                  <SheetContent>
                    <div className='hidden'>
                      <SheetTitle>Menu</SheetTitle>
                      <SheetDescription>asd</SheetDescription>
                    </div>

                    <div className='grid gap-4 py-4'>
                      <ul className='space-y-5'>
                        <li>
                          <Link to='/' className='py-0.5 border-0 !border-b border-primary border-solid'>
                            <h6>Home</h6>
                          </Link>
                        </li>
                        <li>
                          <Link to='/contact' className='py-0.5'>
                            <h6>Contact</h6>
                          </Link>
                        </li>
                        <li>
                          <Link to='/about' className='py-0.5'>
                            <h6>About</h6>
                          </Link>
                        </li>
                        <li>
                          <Link to='/sign-up' className='py-0.5'>
                            <h6>Sign Up</h6>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main className='bg-primary text-primary-foreground max-w-full overflow-x-hidden'>
        <Outlet />
      </main>
      <footer className='bg-primary-foreground text-primary py-8 lg:py-16'>
        <div className='container'>
          <div className='grid gap-10 md:grid-cols-3 xl:grid-cols-5'>
            <div>
              <h5 className='font-bold text-xl mb-4'>Exclusive</h5>
              <div className='mb-4'>
                <h6 className='text-lg font-normal mb-4'>Subscribe</h6>
                <p className='text-base'>Get 10% off your first order</p>
              </div>
              <div className='inline-flex items-center justify-center border border-primary border-solid rounded'>
                <input
                  className='bg-transparent w-44 h-12 py-2 px-3 transition placeholder:text-primary/30'
                  type='email'
                  placeholder='Enter your email'
                />
                <button className='w-12 h-12 inline-flex justify-center items-center text-primary'>
                  <SendHorizontal />
                </button>
              </div>
            </div>

            <div>
              <h5 className='font-bold text-xl mb-4'>Support</h5>
              <div className='space-y-5'>
                <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p>support@coffeeshop.com</p>
                <p>+88015-88888-9999</p>
              </div>
            </div>

            <div>
              <h5 className='font-bold text-xl mb-4'>Account</h5>
              <ul className='space-y-5'>
                <li>
                  <Link to='#'>My Account</Link>
                </li>
                <li>
                  <Link to='/login'>Login</Link> / <Link to='/sign-up'>Register</Link>
                </li>
                <li>
                  <Link to='/cart'>Cart</Link>
                </li>
                <li>
                  <Link to='#'>Wishlist</Link>
                </li>
                <li>
                  <Link to='/product'>Shop</Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className='font-bold text-xl mb-4'>Quick Link</h5>
              <ul className='space-y-5'>
                <li>
                  <Link to='#'>Privacy Policy</Link>
                </li>
                <li>
                  <Link to='#'>Terms Of Use</Link>
                </li>
                <li>
                  <Link to='#'>FAQ</Link>
                </li>
                <li>
                  <Link to='/contact'>Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <h5 className='font-bold text-xl mb-4'>Download App</h5>
              <div className='mb-4'>
                <p className='text-sm text-[#FAFAFA]/70 mb-2'>Save $3 with App New User Only</p>
                <img src='/assets/images/qrcode.png' alt='qrcode' className='w-full h-auto max-w-60' />
              </div>
              <div className='flex items-center gap-5'>
                <Link to='#'>
                  <Facebook />
                </Link>
                <Link to='#'>
                  <Twitter />
                </Link>
                <Link to='#'>
                  <Instagram />
                </Link>
                <Link to='#'>
                  <Linkedin />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default MainLayout;
