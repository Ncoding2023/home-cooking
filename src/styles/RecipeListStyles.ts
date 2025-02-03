import styled from 'styled-components';
// import {CardMedia, Card , Box, Typography  } from '@mui/material';

/*export const CategoryContainer = styled.div`
   display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`; */
export const CategoryContainer = styled.div`
   /* display: flex; */
  flex-wrap: wrap;  // 여러 개의 카드를 가로 정렬
  justify-content: center; // 중앙 정렬
  gap: 16px;
  padding: 24px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  /* width: 100%; // 부모 크기 유지 */
  /* max-width: 1200px; // 최대 크기 제한 */
  /* min-height: 120px;  */

  @media (max-width: 768px) {
    width: 90%;
    min-height: 100px;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center;
  gap: 12px;
`;