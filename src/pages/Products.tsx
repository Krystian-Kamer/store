import { LoaderFunctionArgs } from 'react-router-dom';
import { customFetch } from '../utils';
import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { type Product, type Meta, type Params } from '../types';

const url = '/products';

export const loader = async (data: LoaderFunctionArgs) => {
  const params = Object.fromEntries([
    ...new URL(data.request.url).searchParams.entries(),
  ]) as Params;
  const response = await customFetch(url, { params });
  const products = response.data.data as Product[];
  const meta = response.data.meta as Meta;
  return { products, meta, params };
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
