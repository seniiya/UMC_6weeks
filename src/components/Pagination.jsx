import React from 'react';
import styled from 'styled-components';

const PaginationCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  color: white;

    button {
      background: none;
      border: 2px ;
      color: white;
      padding: 5px 10px;
      margin: 0 5px;
      cursor: pointer;

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed; 
        // 이거 말고 오류창 뜨도록 !! 
      }
    }

    span {
      margin: 0 10px;
    }


`;

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  
  return (
    <PaginationCon>
      <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
      >
          &lt;
      </button>
      <span>{currentPage} / {totalPages}</span>
      <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          >
          &gt;
      </button>
    </PaginationCon>
     


  );
};

export default Pagination;
