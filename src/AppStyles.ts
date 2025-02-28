import styled from 'styled-components';
// 중앙 정렬을 위한 AppContainer
// export const AppContainer = styled.div`
//   display: flex;              /* Flexbox로 레이아웃 설정 */
//   flex-direction: column;     /* 세로 방향으로 요소 배치 */
//   justify-content: center;    /* 수직 중앙 정렬 */
//   align-items: center;        /* 수평 중앙 정렬 */
//   min-height: 100vh;          /* 최소 높이를 화면 크기와 맞춤 */
//   padding: 2rem;
//   text-align: center;
//   margin: 0 auto;             /* 좌우 여백 자동 */
// `;

// // 콘텐츠 영역
// export const Content = styled.div`
//   width: 100%;
//   max-width: 1200px;
//   padding: 20px;
//   box-sizing: border-box;
//   margin-top: 20px;
// `;

// 중앙 정렬을 위한 AppContainer
export const AppContainer = styled.div`
  display: flex;              /* Flexbox로 레이아웃 설정 */
  flex-direction: column;     /* 세로 방향으로 요소 배치 */
  align-items: center;        /* 수평 중앙 정렬 */
  min-height: 100vh;         
  padding: 2rem;
  text-align: center;
  margin: 0 auto;             /* 좌우 여백 자동 */
`;

// 콘텐츠 영역
export const Content = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 20px;
  box-sizing: border-box;
  margin-top: 20px;
`;