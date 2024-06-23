import {
  LoaderFunctionArgs,
  useLoaderData,
} from 'react-router-dom';
import { customFetch } from '../utils';
import {
  Filters,
  PaginationContainer,
  ProductsContainer,
} from '../components';
import { type Product, type Meta } from '../types';

const url = '/products';

export const loader = async (data: LoaderFunctionArgs) => {
  const response = await customFetch(url);
  const products = response.data.data as Product[];
  const meta = response.data.meta as Meta;
  return { products, meta };
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};
export default Products;
