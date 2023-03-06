import { Link } from 'react-router-dom';

import { IProduct } from '@types';
import { CardDiv, CardImage, CardTitle, CardText } from './styled';

interface ProductItemProps {
  product: IProduct;
}

function ProductItem({ product }: ProductItemProps) {
  const { id, title, price, image, rating } = product;
  return (
    <CardDiv>
      <CardImage src={image} alt={`${title} image`} />
      <CardText fontSize={14}>
        Rate: {rating.rate}({rating.count})
      </CardText>
      <CardTitle>
        <Link to={`/products/${id}`}>{title}</Link>
      </CardTitle>
      <CardText fontSize={16}>{price}$</CardText>
    </CardDiv>
  );
}

export default ProductItem;
