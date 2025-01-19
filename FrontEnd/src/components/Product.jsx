import { ShoppingCart, Star, StarHalf } from 'lucide-react';
import { Button } from './ui/button.jsx';

const Product = () => {
  return (
    <div class='py-8 lg:py-16'>
      <div className='container'>
        <div className='grid md:grid-cols-3 xl:grid-cols-4 gap-y-7 gap-x-10'>
          <div className='group'>
            <div className='mb-5 bg-white relative overflow-hidden rounded border border-solid border-black/20'>
              <img
                src='./src/assets/Products/Colombian.jpg.webp'
                alt='Fresh Cofee'
                className='w-full h-auto aspect-square object-cover'
              />
              <div className='lg:absolute lg:bottom-0 lg:left-0 w-full lg:translate-y-full lg:transition lg:group-hover:translate-y-0'>
                <Button className='w-full rounded-none !bg-[#DB4444] text-white'>
                  <ShoppingCart /> Add To Cart
                </Button>
              </div>
            </div>
            <div className='space-y-3 text-xl'>
              <h6>Fresh Coffee</h6>
              <p className='text-[#DB4444]'>$960</p>
              <div className='flex items-center gap-1'>
                <div className='flex items-center gap-1'>
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <StarHalf className='text-[#FFAD33] w-5 h-5' />
                </div>
                <span className='text-lg'>(65)</span>
              </div>
            </div>
          </div>

          <div className='group'>
            <div className='mb-5 bg-white relative overflow-hidden rounded border border-solid border-black/20'>
              <img
                src='./src/assets/Products/BrazilianSantos.webp'
                alt='Fresh Cofee'
                className='w-full h-auto aspect-square object-cover'
              />
              <div className='lg:absolute lg:bottom-0 lg:left-0 w-full lg:translate-y-full lg:transition lg:group-hover:translate-y-0'>
                <Button className='w-full rounded-none !bg-[#DB4444] text-white'>
                  <ShoppingCart /> Add To Cart
                </Button>
              </div>
            </div>
            <div className='space-y-3 text-xl'>
              <h6>Fresh Coffee</h6>
              <p className='text-[#DB4444]'>$960</p>
              <div className='flex items-center gap-1'>
                <div className='flex items-center gap-1'>
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <StarHalf className='text-[#FFAD33] w-5 h-5' />
                </div>
                <span className='text-lg'>(65)</span>
              </div>
            </div>
          </div>

          <div className='group'>
            <div className='mb-5 bg-white relative overflow-hidden rounded border border-solid border-black/20'>
              <img
                src='./src/assets/Products/Ethiopian.webp'
                alt='Fresh Cofee'
                className='w-full h-auto aspect-square object-cover'
              />
              <div className='lg:absolute lg:bottom-0 lg:left-0 w-full lg:translate-y-full lg:transition lg:group-hover:translate-y-0'>
                <Button className='w-full rounded-none !bg-[#DB4444] text-white'>
                  <ShoppingCart /> Add To Cart
                </Button>
              </div>
            </div>
            <div className='space-y-3 text-xl'>
              <h6>Fresh Coffee</h6>
              <p className='text-[#DB4444]'>$960</p>
              <div className='flex items-center gap-1'>
                <div className='flex items-center gap-1'>
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <StarHalf className='text-[#FFAD33] w-5 h-5' />
                </div>
                <span className='text-lg'>(65)</span>
              </div>
            </div>
          </div>

          <div className='group'>
            <div className='mb-5 bg-white relative overflow-hidden rounded border border-solid border-black/20'>
              <img
                src='./src/assets/Products/Glass.jpg'
                alt='Fresh Cofee'
                className='w-full h-auto aspect-square object-cover'
              />
              <div className='lg:absolute lg:bottom-0 lg:left-0 w-full lg:translate-y-full lg:transition lg:group-hover:translate-y-0'>
                <Button className='w-full rounded-none !bg-[#DB4444] text-white'>
                  <ShoppingCart /> Add To Cart
                </Button>
              </div>
            </div>
            <div className='space-y-3 text-xl'>
              <h6>Fresh Coffee</h6>
              <p className='text-[#DB4444]'>$960</p>
              <div className='flex items-center gap-1'>
                <div className='flex items-center gap-1'>
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <StarHalf className='text-[#FFAD33] w-5 h-5' />
                </div>
                <span className='text-lg'>(65)</span>
              </div>
            </div>
          </div>

          <div className='group'>
            <div className='mb-5 bg-white relative overflow-hidden rounded border border-solid border-black/20'>
              <img
                src='./src/assets/Products/Filter.webp'
                alt='Fresh Cofee'
                className='w-full h-auto aspect-square object-cover'
              />
              <div className='lg:absolute lg:bottom-0 lg:left-0 w-full lg:translate-y-full lg:transition lg:group-hover:translate-y-0'>
                <Button className='w-full rounded-none !bg-[#DB4444] text-white'>
                  <ShoppingCart /> Add To Cart
                </Button>
              </div>
            </div>
            <div className='space-y-3 text-xl'>
              <h6>Fresh Coffee</h6>
              <p className='text-[#DB4444]'>$960</p>
              <div className='flex items-center gap-1'>
                <div className='flex items-center gap-1'>
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <StarHalf className='text-[#FFAD33] w-5 h-5' />
                </div>
                <span className='text-lg'>(65)</span>
              </div>
            </div>
          </div>

          <div className='group'>
            <div className='mb-5 bg-white relative overflow-hidden rounded border border-solid border-black/20'>
              <img
                src='./src/assets/Products/Container.webp'
                alt='Fresh Cofee'
                className='w-full h-auto aspect-square object-cover'
              />
              <div className='lg:absolute lg:bottom-0 lg:left-0 w-full lg:translate-y-full lg:transition lg:group-hover:translate-y-0'>
                <Button className='w-full rounded-none !bg-[#DB4444] text-white'>
                  <ShoppingCart /> Add To Cart
                </Button>
              </div>
            </div>
            <div className='space-y-3 text-xl'>
              <h6>Fresh Coffee</h6>
              <p className='text-[#DB4444]'>$960</p>
              <div className='flex items-center gap-1'>
                <div className='flex items-center gap-1'>
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <Star className='text-[#FFAD33] w-5 h-5' />
                  <StarHalf className='text-[#FFAD33] w-5 h-5' />
                </div>
                <span className='text-lg'>(65)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
