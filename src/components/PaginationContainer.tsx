import { type Meta, type Pagination } from '../types';
import { useLoaderData } from 'react-router-dom';


const PaginationContainer = () => {
  const { meta } = useLoaderData() as {meta : Meta}
  return (
    <div className='join'>
      x
    </div>
  );
};
export default PaginationContainer;
