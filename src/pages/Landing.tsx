import { FeaturedProducts, Hero } from '../components/';
import { customFetch } from '../utils';
import { type Product } from '../types';
import { QueryClient, QueryKey } from '@tanstack/react-query';

const url = '/products?featured=true';

const featuredProductsQuery = {
  queryKey: ['featuredProducts'] as QueryKey,
  queryFn: () => customFetch(url)
};

export const loader =
  (queryClient: QueryClient) => async (): Promise<{ products: Product[] }> => {
    const response = await queryClient.ensureQueryData(featuredProductsQuery);
    const products = response.data.data as Product[];
    return { products };
  };

const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};
export default Landing;
