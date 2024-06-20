import { FeaturedProducts, Hero } from '../components/';
import { customFetch } from '../utils';
import { type Product } from '../types';
const url = '/products?featured=true';

export const loader = async (): Promise<Product[]> => {
  const response = await customFetch(url);
  const products: Product[] = response.data.data;
  return products;
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
