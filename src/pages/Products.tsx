import { LoaderFunctionArgs } from 'react-router-dom';
import { customFetch } from '../utils';
import { Filters, PaginationContainer, ProductsContainer } from '../components';
import { type Product, type Meta, type Params } from '../types';
import { QueryClient } from '@tanstack/react-query';

const url = '/products';

const allProductsQuery = (queryParams: Params) => {
  const { search, category, company, order, price, shipping, page } =
    queryParams;
  return {
    queryKey: [
      'products',
      search ?? '',
      category ?? 'all',
      company ?? 'all',
      order ?? 'a-z',
      price ?? 100000,
      shipping ?? false,
      page ?? '1',
    ],
    queryFn: () => customFetch(url, { params: queryParams }),
  };
};

export const loader =
  (queryClient: QueryClient) => async (data: LoaderFunctionArgs) => {
    const params = Object.fromEntries([
      ...new URL(data.request.url).searchParams.entries()
    ]) as Params;
    const response = await queryClient.ensureQueryData(
      allProductsQuery(params)
    );
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
