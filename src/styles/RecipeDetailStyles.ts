import styled from 'styled-components';
import {CardMedia, Card , Box, Typography, Paper  } from '@mui/material';

export const RecipeDetailContainer  = styled(Box)`
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
`;
export const StyledList = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 0;
`;

export const StepCard = styled(Card)`
  margin-bottom: 16px;
`;
type RecipeImageProps = {
  component: 'img';
  image: string;
  alt: string;
  height: string;
};
export const RecipeImage = styled(CardMedia)<RecipeImageProps>`
  border-radius: 8px;
`;

export const StyledCard = styled(Card)`
  margin-bottom: 20px; // 카드 간 간격을 20px로 설정
`;

// 조리과정 스타일 정의
export const StepContainer = styled(Paper)({
  display: 'flex',
  alignItems: 'center',
  gap: '16px', // theme.spacing(2) 대신 직접 px 단위 적용
  padding: '16px',
  marginBottom: '16px',
  borderRadius: '8px',
  backgroundColor: '#f9f9f9',
});


// 조리과정 스타일 정의
export const StepImage = styled('img')({
  width: '100%', // 가로 최대 (부모 요소에 맞춤)
  maxWidth: '400px', // 최대 너비 제한 (디자인에 따라 조정)
  height: 'auto', // 비율 유지
  borderRadius: '8px', // 모서리 둥글게
  objectFit: 'cover', // 이미지가 잘리지 않도록
  flexDirection: 'row', // 기본은 가로 정렬display: 'flex',
  // alignItems: 'center',

  '@media (max-width: 600px)': {
    flexDirection: 'column', // 세로 정렬 (이미지가 위, 텍스트가 아래)
    alignItems: 'flex-start',
    maxWidth: '100%', // 모바일에서는 가로 폭을 100%로 조정
  },
});

// 조리팁 스타일 정의
export const TipContainer = styled(Box)({
  backgroundColor: '#fffbe6',
  padding: '16px', // theme.spacing(2) 대신 px 값 직접 입력
  borderRadius: '8px',
  display: 'flex',
  alignItems: 'center',
  gap: '8px', // theme.spacing(1) 대신
  marginTop: '16px',
});

// 재료 제목 스타일링
export const IngredientsTitle = styled(Typography)`
  font-weight: bold;
  color: #1976d2; // 강조 색상
  font-size: 1.5rem;
  position: absolute; // 절대 위치로 설정
  top: -20px; // 카드 하단 끝자락에 위치
  left: -20px; // 카드 왼쪽 끝에 붙이기
  background-color: #ffffff; // 배경 색상
  padding: 5px 15px; // 제목 주변 패딩
  border-radius: 5px; // 모서리 둥글게
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // 그림자 추가
`;
// 재료 칸 전체 스타일 (배경 + 박스 디자인)
export const IngredientsContent = styled(Box)`
  padding: 20px;
  background-color: silver; // 연한 노란색 배경
  border-radius: 8px; // 둥근 모서리
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); // 그림자 효과 추가
`;

// 재료 개별 항목 스타일
export const IngredientItem = styled(Typography)`
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 8px;
  /* &::before {
    content: "• "; // 점 기호 추가
    color: #ff9800; // 포인트 컬러 (주황)
    font-weight: bold;
  } */
`;

// 영양 정보 스타일링
export const NutritionInfo = styled(Typography)`
  font-size: 1rem;
  margin-bottom: 8px;
  color: #1976d2; // 강조 색상
  text-align: left; // 왼쪽 정렬
`;

export const InfoCard = styled(Card)`
  padding: 16px;
  margin-top: 16px;
  background-color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const NutritionTitle = styled(Typography)`
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 12px;
`;

export const InfoText = styled(Typography)`
  font-size: 16px;
`;