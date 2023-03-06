/* eslint-disable no-nested-ternary */
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAsync } from 'react-use';

import { IProduct } from '@types';
import { getProductById } from 'api/products';
import Loader from '../../components/Loader';
import Button from '../../components/Button';
import Accordion from './Accordion';
import {
  ProductDiv,
  ImageDiv,
  ProductImage,
  ProductContent,
  ProductNav,
  ProductTitle,
  ProductSubtitle,
  ProductDesc,
  AccordionWrapper,
} from './styled';
import { addProduct } from '../../store/cart/reducer';

function Product() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const asyncProduct = useAsync(async () => {
    if (id) {
      const response = await getProductById(id).then((data: IProduct) => data);
      return response;
    }
    return null;
  }, []);

  const toCart = (itemID: number, itemPrice: number) => {
    dispatch(addProduct({ itemID, itemPrice }));
    navigate('/cart');
  };

  return asyncProduct.loading ? (
    <Loader />
  ) : asyncProduct.value ? (
    <ProductDiv>
      <ImageDiv>
        <ProductImage
          src={asyncProduct.value.image}
          alt={`${asyncProduct.value.title} image`}
        />
      </ImageDiv>
      <ProductContent>
        <ProductNav>
          <Link to="/">Home</Link>
          <p>/</p>
          <Link to="/products">Shop</Link>
          <p>/</p>
          <Link to={`/products/category/${asyncProduct.value.category}`}>
            {asyncProduct.value.category}
          </Link>
          <p>/</p>
          <p>{asyncProduct.value.title}</p>
        </ProductNav>
        <ProductTitle>{asyncProduct.value.title}</ProductTitle>
        <ProductSubtitle>
          <p>
            Rate: {asyncProduct.value.rating.rate}(
            {asyncProduct.value.rating.count})
          </p>
          <p>$ {asyncProduct.value.price}</p>
        </ProductSubtitle>
        <ProductDesc>
          <p>{asyncProduct.value.description}</p>
        </ProductDesc>
        <AccordionWrapper>
          <Accordion
            title="description"
            desc={asyncProduct.value.description}
          />
          <Accordion title="care" desc={asyncProduct.value.description} />
          <Accordion title="delivery" desc={asyncProduct.value.description} />
        </AccordionWrapper>
        <Button
          type="button"
          handleSubmit={() =>
            asyncProduct.value
              ? toCart(asyncProduct.value.id, asyncProduct.value.price)
              : null
          }
          text={`Add to cart ($${asyncProduct.value.price})`}
        />
      </ProductContent>
    </ProductDiv>
  ) : null;
}

export default Product;
