import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/Pagination";

interface ListPaginationProps {
  isFirst: boolean;
  isLast: boolean;
  currentPage: number;
  onPageChange: (pageNumber: number) => void;
}

export const ListPagination: React.FC<ListPaginationProps> = ({
  isFirst,
  isLast,
  currentPage,
  onPageChange,
}) => {
  return (
    <Pagination>
      <PaginationContent>
        {!isFirst && (
          <PaginationItem>
            <PaginationPrevious
              href="#"
              onClick={() => onPageChange(currentPage - 1)}
            />
          </PaginationItem>
        )}

        {!isLast && (
          <PaginationItem>
            <PaginationNext
              href="#"
              onClick={() => onPageChange(currentPage + 1)}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
