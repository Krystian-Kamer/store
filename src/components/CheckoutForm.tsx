import { Form, redirect, ActionFunctionArgs } from 'react-router-dom';
import { toast } from 'react-toastify';
import FormInput from './FormInput';
import SubmitBtn from './SubmitBtn';
import { customFetch, formatPrice } from '../utils';
import { clearCart } from '../features/cart/cartSlice';
import { AppStore } from '../store';
import axios from 'axios';

export const action =
  (store: AppStore) =>
  async ({ request }: ActionFunctionArgs) => {
    const formData = await request.formData();
    const { name, address } = Object.fromEntries(formData);
    const user = store.getState().user.user;
    const { cartItems, orderTotal, numItemsInCart } = store.getState().cart;
    const info = {
      name,
      address,
      chargeTotal: orderTotal,
      orderTotal: formatPrice(orderTotal),
      cartItems,
      numItemsInCart,
    };
    try {
      const response = await customFetch.post(
        '/orders',
        { data: info },
        {
          headers: {
            Authorization: `Bearer ${user && user.token}`,
          },
        }
      );
      store.dispatch(clearCart());
      toast.success('Order placed successfully');
      return redirect('/orders');
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage: string = 'There was an error placing your order';
        toast.error(errorMessage);
        return error?.response?.status === 401
          ? redirect('/login')
          : null;
      }
    }
  };

const CheckoutForm = () => {
  return (
    <Form method='POST' className='flex flex-col gap-y-4'>
      <h4 className='font-medium text-xl capitalize'>shipping information</h4>
      <FormInput label='first name' name='name' type='text' />
      <FormInput label='address' name='address' type='text' />
      <div className='mt-4'>
        <SubmitBtn text='place your order' />
      </div>
    </Form>
  );
};
export default CheckoutForm;
