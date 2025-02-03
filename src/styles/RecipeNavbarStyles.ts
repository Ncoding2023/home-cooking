import styled from 'styled-components';
import { Button } from '@mui/material';

// Navbar 스타일
export const Navbar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: linear-gradient(90deg, #FF6F61, #FF9F80) ;
  /* background: linear-gradient(90deg, #FF6F61, #FF9F80) !important; */
  box-shadow: none;
  z-index: 10;
`;

// Toolbar 스타일
export const Toolbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 70px;
`;

// 로고 스타일
export const NavbarLogo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

// 메뉴 항목 스타일
export const NavbarMenu = styled.div`
  display: flex;
  gap: 20px;
`;

// 메뉴 항목
export const NavbarItem = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;

  &:hover {
    color: #FFD1C1;
  }
`;

// 버튼 스타일
export const StyledButton = styled(Button)`
  color: white;
  text-transform: none;
  font-size: 1rem;
  padding: 8px 16px;
  transition: background-color 0.3s;
  position: relative;
  z-index: 10;

  &:hover {
    background-color: #FFD1C1;
  }
`;
