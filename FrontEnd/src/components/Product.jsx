import { ShoppingCart, Star, StarHalf } from 'lucide-react';
import { Button } from './ui/button.jsx';
import coffeeData from '@/data/coffees.js';
import { useDispatch } from 'react-redux';
import { addItem } from '@/store/Slices/cartSlice.js';
import { useToast } from '@//hooks/use-toast';

const Product = () => {
  const dispatch = useDispatch();
  const { toast } = useToast();

  const addItemHandler = (coffee) => {
    toast({
      description: `${coffee.name} added to cart`,
      variant: 'success',
    });

    return addItem(coffee);
  };

  return (
    <div className='py-8 lg:py-16'>
      <div className='container'>
        <div className='grid md:grid-cols-3 xl:grid-cols-4 gap-y-7 gap-x-10'>
          {coffeeData.map((coffee) => (
            <div className='group' key={coffee.id}>
              <div className='mb-5 bg-white relative overflow-hidden rounded border border-solid border-black/20'>
                <img src={coffee.imageUrl} alt={coffee.name} className='w-full h-auto aspect-square object-cover' />
                <div className='lg:absolute lg:bottom-0 lg:left-0 w-full lg:translate-y-full lg:transition lg:group-hover:translate-y-0'>
                  <Button
                    onClick={() => dispatch(addItemHandler(coffee))}
                    className='w-full rounded-none !bg-[#DB4444] text-white'>
                    <ShoppingCart /> Add To Cart
                  </Button>
                </div>
              </div>
              <div className='space-y-3 text-xl'>
                <h6>{coffee.name}</h6>
                <p className='text-[#DB4444]'>RM {coffee.price}</p>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Product;
