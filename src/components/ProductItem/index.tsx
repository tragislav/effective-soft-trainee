import { useState, useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { IProduct } from '@types';
import { deleteProduct, changeProductQuantity } from '../../store/cart/reducer';
import { useAppSelector } from '../../hooks/store';
import { ReactComponent as Minus } from '../../assets/images/minus.svg';
import { ReactComponent as Plus } from '../../assets/images/plus.svg';
import {
  ProductWrapper,
  ProductImage,
  ProductContent,
  ProductTitle,
  ProductContentInner,
  ProductPrice,
  ProductManipulations,
  ProductQuantity,
  ProductButton,
} from './styled';

interface ProductItemProps {
  id: number;
  propQuantity: number;
}

function ProductItem({ id, propQuantity }: ProductItemProps) {
  const [product, setProduct] = useState<IProduct | null>(null);
  const productsList = useAppSelector<Record<string, IProduct>>(
    (state) => state.products.data,
  );
  const dispatch = useDispatch();

  const incrementQuantity = () =>
    dispatch(changeProductQuantity({ itemID: id, quantity: propQuantity + 1 }));
  const decrementQuantity = () =>
    dispatch(changeProductQuantity({ itemID: id, quantity: propQuantity - 1 }));

  const deleteFromCart = useCallback(
    (productID: number) => {
      dispatch(deleteProduct(productID));
    },
    [dispatch],
  );

  useEffect(() => {
    setProduct(productsList[id]);
  }, [productsList, id]);

  useEffect(() => {
    if (propQuantity < 1) {
      deleteFromCart(id);
    }
  }, [propQuantity, id, deleteFromCart, dispatch]);

  return (
    product && (
      <ProductWrapper>
        <ProductImage src={product.image} alt={product.title} />
        <ProductContent>
          <ProductTitle>{product.title}</ProductTitle>
          <ProductContentInner>
            <ProductPrice>$ {product.price}</ProductPrice>
            <ProductManipulations>
              <div>
                <ProductButton type="button" onClick={decrementQuantity}>
                  <Minus />
                </ProductButton>
                <ProductQuantity>{propQuantity}</ProductQuantity>
                <ProductButton type="button" onClick={incrementQuantity}>
                  <Plus />
                </ProductButton>
              </div>
              <ProductButton type="button" onClick={() => deleteFromCart(id)}>
                REMOVE
              </ProductButton>
            </ProductManipulations>
          </ProductContentInner>
        </ProductContent>
      </ProductWrapper>
    )
  );
}

export default ProductItem;
