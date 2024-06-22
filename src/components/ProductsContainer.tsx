import ProductsGrid from './ProductsGrid';
import ProductsList from './ProductsList';
import { type Meta } from '../types';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { BsFillGridFill, BsList } from 'react-icons/bs';

type Layout = 'grid' | 'list';

const ProductsContainer = () => {
  const { meta } = useLoaderData() as { meta: Meta };
  const total: number = meta.pagination.total;
  const [layout, setLayout] = useState<Layout>('grid');

  const setActiveStyles = (pattern: Layout) => {
    return `text-xl btn btn btn-circle btn-sm ${
      pattern === layout
        ? 'btn-primary text-primary-content'
        : 'btn-ghost text-based-content'
    }`;
  };

  return (
    <>
      <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
        <h4 className='font-medium text-md'>
          {total} product{total > 1 && 's'}
        </h4>
        <div className='flex gap-x-2'>
          <button
            type='button'
            onClick={() => setLayout('grid')}
            className={setActiveStyles('grid')}
          >
            <BsFillGridFill />
          </button>
          <button
            type='button'
            onClick={() => setLayout('list')}
            className={setActiveStyles('list')}
          >
            <BsList />
          </button>
        </div>
      </div>

      <div>
        {total === 0 ? (
          <h5 className='text-2xl mt-16'>
            Sorry, no products matched your search...
          </h5>
        ) : layout === 'grid' ? (
          <ProductsGrid />
        ) : (
          <ProductsList />
        )}
      </div>
    </>
  );
};
export default ProductsContainer;
