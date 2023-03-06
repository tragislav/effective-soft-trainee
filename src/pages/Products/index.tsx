import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAsync } from 'react-use';

import { useAppSelector } from 'hooks/store';
import { getCategories } from 'api/products';

import { IProduct } from '@types';
import Loader from '../../components/Loader';
import ProductItem from './ProductItem';

import {
  MainContainer,
  CategorySelect,
  CardsContainer,
  SelectWrapper,
} from './styled';

interface ProductsProps {
  error?: boolean;
}

function Products({ error = false }: ProductsProps) {
  const { category } = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState({});
  const productsFromRedux = useAppSelector((state) => state.products.data);
  const loading = useAppSelector((state) => state.products.loading);

  const toCategory = (value: string) => {
    if (value === 'ALL') {
      navigate(`/products`);
    } else {
      navigate(`/products/category/${value}`);
    }
  };

  const filterProductsByCategory = (
    obj: Record<string, IProduct>,
    filterBy: string,
  ) => {
    const object: Record<string, IProduct> = {};

    Object.keys(obj).forEach((key) => {
      if (obj[key].category === filterBy) {
        object[key] = obj[key];
      }
    });

    return object;
  };

  const asyncCategories = useAsync(async () => {
    const response = await getCategories();
    return response;
  }, []);

  useEffect(() => {
    if (category) {
      setProducts(filterProductsByCategory(productsFromRedux, category));
    } else {
      setProducts(productsFromRedux);
    }
  }, [category, productsFromRedux]);

  const contentZ = (obj: Record<string, IProduct>) => {
    const arr: JSX.Element[] = [];

    Object.keys(obj).forEach((key) => {
      arr.push(<ProductItem key={key} product={obj[key]} />);
    });

    return arr;
  };

  const content = contentZ(products);

  return (
    <>
      {error ? <h3>Something wrong!</h3> : null}
      {loading && !error ? (
        <Loader />
      ) : (
        <MainContainer>
          <SelectWrapper>
            <CategorySelect
              onChange={(e: { target: { value: string } }) =>
                toCategory(e.target.value)
              }
              value={category}
            >
              <option>ALL</option>
              {asyncCategories.value
                ? asyncCategories.value.map((item) => (
                    <option key={item}>{item}</option>
                  ))
                : null}
            </CategorySelect>
          </SelectWrapper>
          <CardsContainer>{products && content}</CardsContainer>
        </MainContainer>
      )}
    </>
  );
}

Products.defaultProps = {
  error: false,
};

export default Products;
