import { type Meta, type Pagination } from '../types';

const PaginationContainer = ({ meta }: { meta: Meta }) => {
  const { pagination }: { pagination: Pagination } = meta;
  const { page, pageCount } = pagination;

  const buttons = Array(pageCount).fill('button');
  return (
    <div className='join'>
      {buttons.map((button, index) => {
        return (
          <button key={index} className='join-item btn'>
            {index + 1}
          </button>
        );
      })}
    </div>
  );
};
export default PaginationContainer;
