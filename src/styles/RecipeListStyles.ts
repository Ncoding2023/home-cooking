import styled from 'styled-components';

export const RecipeListContainer = styled.div`
  max-width: 950px;
  min-width: 950px;

  @media (max-width: 768px) {
    width: 90%;
    min-height: 80px;
    max-width: 320px;
  min-width: 320px;
  }
`;
export const CategoryContainer = styled.div`
  justify-content: center; // 중앙 정렬
  gap: 16px;
  padding: 24px;
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  margin-top: 80px;


  @media (max-width: 768px) {
    width: 80%;
    min-height: 80px;
  }
`;

export const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #fff;
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