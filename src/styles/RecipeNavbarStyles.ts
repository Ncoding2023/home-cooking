// StyledComponents.ts
import styled from "styled-components";
import { AppBar, Box, IconButton, Typography } from "@mui/material";
import { Link } from "react-router-dom";

// AppBar 스타일
export const StyledAppBar = styled(AppBar)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(to right, #ff7e5f, #feb47b) !important;
  box-shadow: none;
  z-index: 10;
`;

// Toolbar 스타일
export const StyledToolbar = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 70px;
`;

// 로고 스타일
export const NavbarLogo = styled(Typography)`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

// 메뉴 항목 스타일
export const NavbarMenu = styled(Box)`
  display: flex;
  gap: 20px;
`;

// IconButton을 Link와 결합하여 스타일링
export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const StyledIconButton = styled(IconButton)`
  transition: color 0.3s, transform 0.3s;
  color: inherit;
  
  &.active {
    color: white;  // 클릭 시 흰색으로 변경
    transform: scale(1.1);  // 크기 확대 효과
  }

  &:hover {
    color: white;  // 호버 시 흰색으로 변경
    transform: scale(1.1);  // 크기 확대 효과
  }
`;
