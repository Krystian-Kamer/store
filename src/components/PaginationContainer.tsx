import { type Meta } from '../types';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const PaginationContainer = () => {
  const { meta } = useLoaderData() as { meta: Meta };
  const { pageCount, page } = meta.pagination;

  const pages = Array.from({ length: pageCount }, (_, index) => {
    return index + 1;
  });

  const location = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber: number) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', pageNumber.toString());
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  if (pageCount < 2) return null;
  return (
    <div className='mt-16 flex justify-end'>
      <div className='join'>
        {page !== 1 && (
          <button
            className='btn btn-xs sm:btn-md join-item'
            onClick={() => {
              handlePageChange(page - 1);
            }}
          >
            Prev
          </button>
        )}

        {pages.map((pageNumber) => {
          return (
            <button
              key={pageNumber}
              className={`btn btn-xs sm:btn-md border-none join-item ${
                pageNumber === page ? 'bg-base-300 border-base-300' : ''
              }`}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </button>
          );
        })}
        {page !== pageCount && (
          <button
            className='btn btn-xs sm:btn-md join-item'
            onClick={() => {
              handlePageChange(page + 1);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
export default PaginationContainer;
