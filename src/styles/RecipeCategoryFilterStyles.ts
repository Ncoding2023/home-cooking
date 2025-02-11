import styled from 'styled-components';
import {Box, Typography } from '@mui/material';

export const CategoryContainer = styled(Box)`
display: flex;
justify-content: space-between; /* 제목과 카테고리 항목을 양 끝에 배치 */
align-items: center; /* 세로 중앙 정렬 */
gap: 16px;
padding: 24px;
`;

export const Title = styled(Typography)`
font-size: 18px;
font-weight: bold;
color: #333;
`;

export const CategoryBox = styled(Box)`
display: flex;
gap: 16px;
flex-wrap: wrap;
`;

// shouldForwardProp을 사용하여 isActive가 DOM에 전달되지 않도록 설정
export const CategoryItem = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== 'isActive', // isActive는 DOM에 전달되지 않음
})<{ isActive: boolean }>`
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  padding: 8px 16px;
  color: ${(props) => (props.isActive ? '#007BFF' : '#333')}; /* 선택된 항목 강조 */
  border-bottom: ${(props) => (props.isActive ? '2px solid #007BFF' : '2px solid transparent')}; /* 밑줄 효과 */
  transition: color 0.3s, border-bottom 0.3s;

&:hover {
  color: #007BFF; /* hover 시 파란색으로 변화 */
  border-bottom: 2px solid #007BFF; /* hover 시 밑줄 파란색 */
}`;