import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ShopContext } from '../../Context/Context';
import Breadcrum from '../Breadcrums/Breadcrum';


const Products = () => {
  const {all_product} = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId))

  return (
    <div>
      <Breadcrum product={product}/>
    </div>
  )
}

export default Products;
