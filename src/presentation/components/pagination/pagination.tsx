import { useMemo } from "react";
import { Button } from "../button/button";

const ellipsisStyle = "relative border bg-white inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700";

export function Pagination({ 
  totalItems = 0, 
  itemsPerPage, 
  currentPage, 
  onPageChange 
}: TPaginationProps) {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handleClick = (page: number) => {
    if (page === currentPage) return;
    onPageChange(page);
  };

  const renderPageNumbers = useMemo(() => {
    const pageNumbers = [];
    const showPreviousEllipsis = currentPage > 3;
    const showNextEllipsis = currentPage < totalPages - 2;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
        pageNumbers.push(
          <a
            key={i}
            href="#"
            className={`relative border mx-1 inline-flex items-center px-4 py-2 text-sm font-semibold ${
              i === currentPage
                ? 'bg-primary-500 text-white'
                : 'text-gray-900 bg-white hover:bg-primary-500 hover:text-white'
            }`}
            onClick={() => handleClick(i)}
          >
            {i}
          </a>
        );
      } else if (i === currentPage - 2 && showPreviousEllipsis) {
        pageNumbers.push(
          <span key={`previous-ellipsis`} className={ellipsisStyle}>
            ...
          </span>
        );
      } else if (i === currentPage + 2 && showNextEllipsis) {
        pageNumbers.push(
          <span key={`next-ellipsis`} className={ellipsisStyle}>
            ...
          </span>
        );
      }
    }

    return pageNumbers;
  }, [currentPage, totalPages]);

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  return (
    <div className="sm:flex sm:flex-1 sm:items-center sm:justify-between">
      <div className="hidden sm:flex">
        <p className="text-sm text-gray-700">
          Showing
          <span className="font-medium mx-1">
            {Math.min((currentPage - 1) * itemsPerPage + 1, totalItems)}
          </span>
          to
          <span className="font-medium mx-1">
            {Math.min(currentPage * itemsPerPage, totalItems)}
          </span>
          of
          <span className="font-medium mx-1">{totalItems}</span>
          results
        </p>
      </div>
      <div>
        <nav className="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
          <Button 
            onClick={handlePreviousPage} 
            disabled={currentPage === 1} 
            className="border"
          >
            Previous
          </Button>
          {renderPageNumbers}
          <Button 
            onClick={handleNextPage} 
            disabled={currentPage === totalPages}
            className="border"
          >
            Next
          </Button>
        </nav>
      </div>
    </div>
  );
}


type TPaginationProps = {
  totalItems?: number;
  itemsPerPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
};
