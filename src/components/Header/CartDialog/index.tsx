import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { ICart } from '@types';
import { useAppSelector } from 'hooks/store';
import { deleteAllProducts } from '../../../store/cart/reducer';
import Loader from '../../Loader';
import Button from '../../Button';
import ProductItem from '../../ProductItem';
import { ReactComponent as Close } from '../../../assets/images/cancel.svg';
import {
  CartDialogWrapper,
  CartDialogContent,
  ControlDialogDiv,
  CloseButton,
  CartDialogTitle,
  TitleText,
  TitleButton,
  ProductsContainer,
  DialogFooter,
  DialogFooterPrice,
} from './styled';

interface CartDialogProps {
  closeModal: () => void;
}

function CartDialog({ closeModal }: CartDialogProps) {
  const [cart, setCart] = useState<Record<string, ICart>>({});
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
          key={obj[key].productId}
          id={obj[key].productId}
          propQuantity={obj[key].productQuantity}
        />,
      );
    });
    return arr;
  };

  const content = productsContent(cart);

  return (
    <CartDialogWrapper>
      {loading ? (
        <Loader />
      ) : (
        cart && (
          <CartDialogContent>
            <ControlDialogDiv>
              <CloseButton type="button" onClick={closeModal}>
                <Close />
              </CloseButton>
            </ControlDialogDiv>
            <CartDialogTitle>
              <TitleText>CART ({content.length})</TitleText>
              <TitleButton type="button" onClick={clearCart}>
                REMOVE ALL
              </TitleButton>
            </CartDialogTitle>
            <ProductsContainer>{content}</ProductsContainer>
            <DialogFooter>
              <DialogFooterPrice>
                <p>Total</p>
                <p>${totalPrice}</p>
              </DialogFooterPrice>
              <Button type="button" text="ORDER NOW" handleSubmit={clearCart} />
            </DialogFooter>
          </CartDialogContent>
        )
      )}
    </CartDialogWrapper>
  );
}

export default CartDialog;
