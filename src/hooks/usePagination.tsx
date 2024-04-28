import { useState } from "react";

interface PaginatedList {
  currentPage: number;
  isFirst: boolean;
  isLast: boolean;
  paginate: (pageNumber: number) => void;
  reset: () => void;
}
interface PaginationProps {
  itemPerPage: number;
  totalItems: number;
}
const usePagination = ({
  itemPerPage,
  totalItems,
}: PaginationProps): PaginatedList => {
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (pageNumber: number): void => {
    setCurrentPage(pageNumber);
  };
  const reset = (): void => {
    setCurrentPage(1);
  };

  const isLast = itemPerPage * currentPage >= totalItems;
  return { isFirst: currentPage === 1, isLast, currentPage, paginate, reset };
};

export default usePagination;
