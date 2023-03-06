import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { ICart } from '@types';

import { deleteAllProducts } from '../../store/cart/reducer';

import Loader from '../../components/Loader';
import ProductItem from '../../components/ProductItem';
import Button from '../../components/Button';

import {
  CartWrapper,
  CartTitle,
  CartProducts,
  CartPriceModule,
  CartPriceTitle,
  CartPriceContent,
  CartPriceBottom,
} from './styled';
import { useAppSelector } from '../../hooks/store';

function CartPage() {
  const [cart, setCart] = useState({});
  const [loading, setLoading] = useState<boolean>(false);
  const [totalPrice, setTotalPrice] = useState<string>('0');
  const cartProducts = useAppSelector((state) => state.cart);
  const dispatch = useDispatch();

  const totalPriceCalculation = (obj: Record<string, ICart>) => {
    let count = 0;

    Object.keys(obj).forEach((key) => {
      count += obj[key].productQuantity * obj[key].productPrice;
    });

    return count;
  };

  useEffect(() => {
    setLoading(true);
    setCart(cartProducts);
    setTotalPrice(totalPriceCalculation(cartProducts).toFixed(2));
    setLoading(false);
  }, [cartProducts]);

  const clearCart = () => {
    dispatch(deleteAllProducts());
  };

  const productsContent = (obj: Record<string, ICart>) => {
    const arr: JSX.Element[] = [];
    Object.keys(obj).forEach((key) => {
      arr.push(
        <ProductItem
          key={key}
          id={obj[key].productId}
          propQuantity={obj[key].productQuantity}
        />,
      );
    });
    return arr;
  };

  const content = productsContent(cart);

  return (
    <CartWrapper>
      {loading ? (
        <Loader />
      ) : (
        cart && (
          <>
            <CartTitle>
              <h3>Checkout ({content.length})</h3>
            </CartTitle>
            <CartProducts>
              {content.length ? (
                content
              ) : (
                <div>
                  <h3>Your cart is empty</h3>
                  <Link to="/products">SHOP NOW</Link>
                </div>
              )}
            </CartProducts>
            <CartPriceModule>
              <CartPriceTitle>
                <p>Items in a chart: {content.length}</p>
                <p>${totalPrice}</p>
              </CartPriceTitle>
              <CartPriceContent>
                A part of your order is in stock and will be delivered within
                1-5 days. Custom jewelry will take 4-5 weeks to produce. Once
                they are ready to ship, we will contact you with shipping
                details.
              </CartPriceContent>
              <CartPriceBottom>
                <p>Subtotal</p>
                <p>${totalPrice}</p>
              </CartPriceBottom>
              <Button
                text="continue to checkout"
                handleSubmit={clearCart}
                type="button"
                width="369px"
              />
            </CartPriceModule>
          </>
        )
      )}
    </CartWrapper>
  );
}

export default CartPage;
