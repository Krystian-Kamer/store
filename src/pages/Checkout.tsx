import { useAppSelector } from '../hooks';
import { CartTotals, CheckoutForm, SectionTitle } from '../components';
import { Link, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AppStore } from '../store';

export const loader = (store: AppStore) => () => {
  const user = store.getState().user.user;
  if (!user) {
    toast.warn('You must be logged in to checkout');
    return redirect('/login');
  }
  return null;
};

const Checkout = () => {
  const numItemsInCart: number = useAppSelector(
    (state) => state.cart.numItemsInCart
  );

  if (numItemsInCart === 0) {
    return (
      <>
        <SectionTitle text='Your cart is empty' />
        <Link to='/' className='btn btn-primary mt-8 uppercase'>
          Back to Home
        </Link>
      </>
    );
  }

  return (
    <>
      <SectionTitle text='place your order' />
      <div className='mt-8 grid gap-8 md:grid-cols-2 items-start'>
        <CheckoutForm />
        <CartTotals />
      </div>
    </>
  );
};
export default Checkout;
