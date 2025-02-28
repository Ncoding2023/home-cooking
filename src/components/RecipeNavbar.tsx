// RecipeNavbar.tsx
import React, { useState } from "react";
import { Slide } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import RestaurantMenuIcon from "@mui/icons-material/RestaurantMenu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import InfoIcon from "@mui/icons-material/Info";
import SearchIcon from "@mui/icons-material/Search";
import RecipeSearch from "./RecipeSearch";

// 스타일 파일에서 임포트
import { StyledAppBar, StyledToolbar, NavbarLogo, NavbarMenu, StyledIconButton, StyledLink } from "../styles/RecipeNavbarStyles";
import { useNavigate } from "react-router-dom";

const RecipeNavbar: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const [activeButton, setActiveButton] = useState<string | null>(null);

  const handleClick = (button: string) => {
    console.log("query==",query);
    console.log("button==",button);
    setActiveButton(prev => (prev === button ? null : button)); // 이미 선택된 아이콘은 비활성화
    if (button === "search") {
      setSearchOpen(!searchOpen);//버튼 전환
    }else{
      setSearchOpen(false);
    }
  };
  const navigate = useNavigate();

  const handleSearch = async () => {
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
    setLoading(true);
    try {
      console.log(`Searching for: ${query}`);
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <StyledAppBar>
      <StyledToolbar>
        <NavbarLogo as="div">
          Recipe Finder
        </NavbarLogo>
        <NavbarMenu>
          <StyledLink to="/">
            <StyledIconButton         
        className={activeButton === 'home' ? 'active' : ''}
        onClick={() => handleClick('home')}
      >
              <HomeIcon />
            </StyledIconButton>
          </StyledLink>

          <StyledLink to="/RecipeList">
            <StyledIconButton 
                    className={activeButton === 'restaurant' ? 'active' : ''}
                    onClick={() => handleClick('restaurant')}
                  >
              <RestaurantMenuIcon />
            </StyledIconButton>
          </StyledLink>

          <StyledLink to="/RecipeFavorite">
            <StyledIconButton
                   className={activeButton === 'favorite' ? 'active' : ''}
                   onClick={() => handleClick('favorite')}
                 >
              <FavoriteIcon />
            </StyledIconButton>
          </StyledLink>

          <StyledLink to="/RecipeAbout">
            <StyledIconButton
               className={activeButton === 'info' ? 'active' : ''}
               onClick={() => handleClick('info')}
             >
              <InfoIcon />
            </StyledIconButton>
          </StyledLink>

          <StyledIconButton 
             className={activeButton === 'search' ? 'active' : ''}
             onClick={() => handleClick('search')}
          >
            <SearchIcon />
          </StyledIconButton>
        </NavbarMenu>
      </StyledToolbar>

      <Slide direction="down" in={searchOpen} mountOnEnter unmountOnExit>
        <RecipeSearch
          query={query}
          onQueryChange={setQuery}
          onSearch={handleSearch}
          isLoading={loading}
        />
      </Slide>
    </StyledAppBar>
  );
};

export default RecipeNavbar;

