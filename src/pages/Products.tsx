import { Filters, PaginationContainer, ProductsContainer } from '../components';

export const loader = async (data) => {
  return null;
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
