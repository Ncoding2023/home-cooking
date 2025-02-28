import styled from "styled-components";
// import { Link } from "react-router-dom";



// 푸터 컨테이너
export const FooterContainer = styled.footer`
  width: 100%;
  padding: 20px;
  left: 0;
  position: absolute;
  /* position: relative; */
  background: linear-gradient(to right, #ff7e5f, #feb47b);
  color: white;
  font-size: 14px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: auto;
`;

// 상단 내용 (사이트 설명, SNS 링크)
export const FooterContent = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  flex-wrap: wrap;
  margin-bottom: 20px;

  &.top-section {
    justify-content: space-between;
    align-items: center;
  }

  &.bottom-section {
    justify-content: center;
    flex-direction: column;
    text-align: center;
  }
`;

// 왼쪽 항목 (사이트 설명, 저작권 정보 등)
export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  width: 33%;
`;

// 중앙 항목 (아이콘)
export const FooterCenter = styled.div`
  display: flex;
  flex-direction: row;
  gap: 33px;
  justify-content: center;
  text-align: center;
  width: 33%;
`;

// 오른쪽 항목 (SNS 링크)
export const FooterRight = styled.div`
  display: flex;
  gap: 20px;
  text-align: right;
  align-items: center;
  width: 33%;
  justify-content: flex-end;
`;

// 링크 스타일
export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

// SNS 아이콘 버튼 스타일
export const FooterIconButton = styled.a`
  color: white;
`;

// 아이콘 배치를 가로로 설정하는 스타일 추가
export const FooterIconContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;
