import { useAppSelector } from '../hooks';
import { CartItemsList, CartTotals, SectionTitle } from '../components';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { user } = useAppSelector((state) => state.user);

  const numItemsInCart: number = useAppSelector(
    (state) => state.cart.numItemsInCart
  );

  if (numItemsInCart === 0) {
    return <SectionTitle text='Your cart is empty' />;
  }
  return (
    <>
      <SectionTitle text='Shopping Cart' />
      <div className='mt-8 grid gap-8 lg:grid-cols-12'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          {user ? (
            <Link
              to='/checkout'
              className='btn btn-primary btn-block mt-8 uppercase'
            >
              proced to checkout
            </Link>
          ) : (
            <Link
              to='/login'
              className='btn btn-primary btn-block mt-8 uppercase'
            >
              please log in
            </Link>
          )}
        </div>
      </div>
    </>
  );
};
export default Cart;
