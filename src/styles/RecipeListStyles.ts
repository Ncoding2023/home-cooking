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
  /* flex-wrap: wrap;  // 여러 개의 카드를 가로 정렬 */
  justify-content: center; // 중앙 정렬
  gap: 16px;
  padding: 24px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;

  /* width: 100%; // 부모 크기 유지 */
  /* max-width: 1200px; // 최대 크기 제한 */
  /* min-height: 120px;  */

  @media (max-width: 768px) {
    width: 90%;
    min-height: 80px;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  text-align: left;  /* 텍스트 왼쪽 정렬 */
  align-self: flex-start; /* flex 컨테이너에서 왼쪽 정렬 */
  margin: 0; /* 기본 마진 제거 */
`;
export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center;
  gap: 12px;
`;

// export const CategoryContainer = styled.div`
//   display: flex;
//   flex-direction: column; /* 세로 정렬 */
//   align-items: center;
//   padding: 24px;
//   background-color: #f5f5f5;
//   border-radius: 8px;
//   box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
//   gap: 16px;
//   width: 100%;
//   min-height: 120px;
// `;

// export const Title = styled.h2`
//   font-size: 20px;
//   font-weight: 600;
//   color: #333;
//   margin-bottom: 16px;
//   text-align: center;
// `;

// export const ButtonContainer = styled.div`
//   display: flex;
//   gap: 16px;
//   flex-wrap: wrap;
//   justify-content: center;
// `;

// export const Tag = styled.div<{ isActive: boolean }>`
//   font-size: 16px;
//   color: ${(props) => (props.isActive ? '#007BFF' : '#333')}; // 클릭된 태그에 색을 다르게
//   cursor: pointer;
//   padding: 8px;
//   border-bottom: ${(props) => (props.isActive ? '2px solid #007BFF' : 'none')}; // 밑줄 효과
//   transition: all 0.3s ease;

//   &:hover {
//     color: #007BFF; // 마우스를 올리면 색이 변함
//   }
// `;