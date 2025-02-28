import styled from 'styled-components';
import {CardMedia, Card , Box, Typography, Paper, CardContent, Grid2  } from '@mui/material';
// import { , Typography } from '@mui/material';

// 스타일 적용된 Box
export const StyledBox = styled(Box)`
  /* margin-top: 20px; */
  width: 100%;
  margin: 0 auto; /* 가운데 정렬 */
`;

// 스타일 적용된 CardContent
export const StyledCardContent = styled(CardContent)`
  padding: 2rem;
  /* background-color: #f7f0e1;   */
  background: linear-gradient(90deg, #ff6f61, #ff9f80);
  /* border-radius: 8px; */
`;

// 스타일 적용된 Typography
export const StyledTypographyH4 = styled(Typography)`
  font-weight: 600;
  color: #333;  /* 어두운 텍스트 색상 */
`;

export const StyledTypographySubtitle = styled(Typography)`
  font-size: 1.1rem;
  color: #666;  /* 설명 텍스트 색상 */
`;

// 스타일 적용된 Typography (재료 제목)
export const IngredientsTitle = styled(Typography)`
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;

// 스타일 적용된 Card (재료 영역의 카드) - 배경에 그라디언트 추가
export const StyledIngredientsCard = styled(Card)`
  margin-top: 20px;
  /* background: #ff6f61; 그라디언트 배경 */
  border-radius: 8px;
  color: white; /* 텍스트 색상 */
  box-shadow: none; /* 기본 그림자 없애기 */
  padding: 0; /* 내부 여백을 0으로 설정해 그라디언트가 카드 전체에 적용되도록 */
`;

// 스타일 적용된 IngredientsContent (재료 목록 영역)
export const IngredientsContent = styled.div`
  padding: 1rem;
  font-size: 1rem;
  background: linear-gradient(90deg, #ff6f61, #ff9f80);
  /* color: #fff;  */
`;

// 스타일 적용된 IngredientItem (재료 목록의 각 항목)
export const IngredientItem = styled(Typography)`
  font-size: 1rem;
  margin-bottom: 0.5rem;
  /* color: #fff; */
`;
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
  /* border-radius: 8px; */
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
  // backgroundColor: '#ff6f61 !important',
  background: 'linear-gradient(90deg, #ff6f61, #ff9f80) !important', // 그라데이션 적용
  // col:'#fff',
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

// // 재료 제목 스타일링
// export const IngredientsTitle = styled(Typography)`
//   font-weight: bold;
//   color: #1976d2; // 강조 색상
//   font-size: 1.5rem;
//   position: absolute; // 절대 위치로 설정
//   top: -20px; // 카드 하단 끝자락에 위치
//   left: -20px; // 카드 왼쪽 끝에 붙이기
//   background-color: #ffffff; // 배경 색상
//   padding: 5px 15px; // 제목 주변 패딩
//   border-radius: 5px; // 모서리 둥글게
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); // 그림자 추가
// `;
// // 재료 칸 전체 스타일 (배경 + 박스 디자인)
// export const IngredientsContent = styled(Box)`
//   padding: 20px;
//   background-color: silver; // 연한 노란색 배경
  
//   border-radius: 8px; // 둥근 모서리
//   box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); // 그림자 효과 추가
// `;

// // 재료 개별 항목 스타일
// export const IngredientItem = styled(Typography)`
//   font-size: 1rem;
//   line-height: 1.8;
//   margin-bottom: 8px;
//   /* &::before {
//     content: "• "; // 점 기호 추가
//     color: #ff9800; // 포인트 컬러 (주황)
//     font-weight: bold;
//   } */
// `;

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
  width: 100%;
  /* background-color: #ff6f61 !important; background-color 덮어쓰기 */
  background: linear-gradient(90deg, #ff6f61, #ff9f80)!important; /* 그라디언트 배경 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
export const StyledGridContainer = styled.div`
  display: grid;
  gap: 16px; /* 카드 간 간격 */
`;

export const StyledGridContainerThree = styled(StyledGridContainer)`
  grid-template-columns: repeat(3, 1fr); /* 첫 줄 3개 */
`;

export const StyledGridContainerTwo = styled(StyledGridContainer)`
  grid-template-columns: repeat(2, 1fr); /* 두 번째 줄 2개 */
`;

export const StyledGridItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 200px; /* 최소 너비 설정 */
`;
// export const StyledGridContainer = styled(Grid2)`
// width: 100%;
// /* min-width: 900px; */
//   /* display: flex; */
//   /* justify-content: center; */
//   /* align-items: center; */
// `;

// export const StyledGridItem = styled.div`
// display: grid;
// /* justify-content: center;
// align-items: center; */
// flex: 0 0 33.33%; /* 기본값: 3개 정렬 */

// @media (max-width: 600px) {
//   flex: 0 0 100%; /* 모바일에서는 1줄 1개 */
// }
// `;
// export const StyledGridItemHalf = styled(StyledGridItem)`
//   flex: 0 0 50%; /* 2개 정렬 */
// `;

export const NutritionTitle = styled(Typography)`
  font-weight: bold;
  color: #1976d2;
  margin-bottom: 12px;
`;

export const InfoText = styled(Typography)`
  font-size: 16px;
`;