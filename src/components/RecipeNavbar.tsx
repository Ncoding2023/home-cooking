import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';  // Link 임포트
import { Navbar, NavbarLogo, NavbarMenu, NavbarItem } from './RecipeNavbarStyles'; // 스타일 import

import { Box } from "@mui/material";
import "../styles/RecipeNavbar.css";
import RecipeList from "../pages/RecipeList";
import Home from "../pages/Home";

const RecipeNavbar: React.FC = () => {
  return (

    <AppBar position="fixed" className="navbar">
      <Toolbar className="toolbar">
        <Typography variant="h6" component="div" className="navbar-logo">
          Recipe Finder
        </Typography>
        <Box className="navbar-menu">
          <Button className="button" component={Link} to="/">
            Home
          </Button>
          <Button className="button"  component={Link} to="/RecipeList">
            Recipes
          </Button>
          {/* 
카테고리 필터링: 레시피를 카테고리(예: 아침, 점심, 디저트 등)로 필터링 할 수 있는 기능.
검색 기능: 사용자가 특정 재료나 이름으로 레시피를 검색할 수 있는 기능.
레시피 카드: 각 레시피를 카드 형태로 정리하고, 각 카드에 상세보기 버튼을 추가하여 자세한 레시피 정보를 제공.
즐겨찾기: 마음에 드는 레시피를 즐겨찾기할 수 있는 기능. */}
          <Button className="button" href="#about">
            About
            {/* 
팀 소개: 사이트 또는 앱을 만든 개발자나 팀을 소개하는 섹션.
목표 및 비전: 사이트나 애플리케이션의 목표, 개발 배경 등을 설명하는 섹션.
연락처 및 피드백: 사용자로부터 피드백을 받을 수 있는 연락처나 폼을 추가.
FAQ: 자주 묻는 질문들을 정리하여 사용자들이 쉽게 궁금증을 해결할 수 있도록. */}
          </Button>
          <Button className="button"  component={Link}  to="/Test1">
            Test1
          </Button>
          {/* 
연락처 폼: 사용자가 직접 메시지를 보낼 수 있는 폼을 제공 (예: 이름, 이메일, 메시지).
지도: 회사나 개발팀의 오프라인 위치가 있다면, 구글 맵을 통해 위치를 제공.
소셜 미디어 링크: 팀이나 서비스 관련 소셜 미디어 링크를 제공하여 사용자가 소셜 미디어에서 소통할 수 있도록 유도.
연락처 정보: 이메일, 전화번호, 주소 등. */}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default RecipeNavbar;
