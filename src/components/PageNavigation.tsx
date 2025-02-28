import React from 'react';
import { Box } from '@mui/material'; // Box 사용 예시
import { PaginationProps } from '../types/RecipeTypes'; // 타입을 types에서 임포트


const PageNavigation: React.FC<PaginationProps> = ({ startIdx, endIdx, totalItems, onPageChange }) => {
    const itemsPerPage = 18;
    const itemsPagePage = 10;
    const currentPage = Math.ceil(startIdx / itemsPerPage);
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // const maxPageButtons = 10; // 한 번에 표시할 페이지 버튼 수
  const startPage = Math.floor((currentPage - 1) / itemsPagePage) * itemsPagePage + 1; // 현재 범위의 시작 페이지
  const endPage = Math.min(startPage + itemsPagePage - 1, totalPages); // 현재 범위의 마지막 페이지

    return (
      <Box sx={{marginTop:"10px"}}>
        <button onClick={() => onPageChange(startIdx - itemsPerPage, startIdx - 1)} disabled={currentPage === 1} style={{background:"linear-gradient(to right, #ff7e5f, #feb47b)"}}>
          Prev
        </button>

  {Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i).map((page) => (
    <button
      key={page}
      onClick={() => onPageChange((page - 1) * itemsPerPage + 1, page * itemsPerPage)}
      disabled={startIdx === (page - 1) * itemsPerPage + 1}
      style={{background:"linear-gradient(to right, #ff7e5f, #feb47b)"}}
    >
      {page}
    </button>
      ))}

        <button onClick={() => onPageChange(endIdx + 1, endIdx + itemsPerPage)} disabled={currentPage === totalPages} style={{background:"linear-gradient(to right, #ff7e5f, #feb47b)"}}>
          Next
        </button>
      </Box>
    );
  };
  export default PageNavigation;
  