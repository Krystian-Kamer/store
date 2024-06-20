import { FeaturedProducts, Hero } from '../components/';
import { customFetch } from '../utils';
import { type Product } from '../types';
const url = '/products?featured=true';

export const loader = async (): Promise<{ products: Product[] }> => {
  const response = await customFetch(url);
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
