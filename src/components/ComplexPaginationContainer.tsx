import { type Meta } from '../types';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom';

const ComplexPaginationContainer = () => {
  const { meta } = useLoaderData() as { meta: Meta };
  const { pageCount, page } = meta.pagination;
  const location = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber: number) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('page', pageNumber.toString());
    navigate(`${location.pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({
    pageNumber,
    activeClass,
  }: {
    pageNumber: number;
    activeClass: number | boolean;
  }) => {
    return (
      <button
        key={pageNumber}
        className={`btn btn-xs sm:btn-md border-none join-item ${
          activeClass ? 'bg-base-300 border-base-300' : ''
        }`}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];
    pageButtons.push(addPageButton({ pageNumber: 1, activeClass: page === 1 }));
    if (page !== 1 && page !== pageCount) {
      pageButtons.push(addPageButton({ pageNumber: page, activeClass: true }));
    }
    pageButtons.push(
      addPageButton({ pageNumber: pageCount, activeClass: page === pageCount })
    );
    return pageButtons;
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
        {renderPageButtons()}
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
export default ComplexPaginationContainer;
