import { useAppSelector } from '../hooks';
import CartItem from './CartItem';
import { type CartProduct } from '../types';

const CartItemsList = () => {
  const { cartItems }: { cartItems: CartProduct[] } = useAppSelector(
    (state) => state.cart
  );

  return (
    <>
      {cartItems.map((item) => {
        return <CartItem key={item.cartID} cartItem={item} />;
      })}
    </>
  );
};
export default CartItemsList;
