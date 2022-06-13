import { Button } from '@chakra-ui/react';
import React from 'react'

export const Pagination = ({ currentPage, lastPage, onPageChange }) => {
  const arr = new Array(lastPage).fill(0);


  return (
    <div>
      {arr.map((item, page) => (
        <Button
          disabled={page + 1 === currentPage}
          onClick={() => onPageChange(page + 1)}
        >
          {page + 1}
        </Button>
      ))}
    </div>
  );
};
