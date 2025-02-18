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

const RecipeNavbar: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState<boolean>(false);
  const [query, setQuery] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!query.trim()) return;
    setLoading(true);
    try {
      console.log(`Searching for: ${query}`);
    } catch (error) {
      console.error("검색 중 오류 발생:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleSearch = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <StyledAppBar>
      <StyledToolbar>
        <NavbarLogo as="div">
          Recipe Finder
        </NavbarLogo>
        <NavbarMenu>
          <StyledLink to="/">
            <StyledIconButton>
              <HomeIcon />
            </StyledIconButton>
          </StyledLink>

          <StyledLink to="/RecipeList">
            <StyledIconButton>
              <RestaurantMenuIcon />
            </StyledIconButton>
          </StyledLink>

          <StyledLink to="/RecipeFavorite">
            <StyledIconButton>
              <FavoriteIcon />
            </StyledIconButton>
          </StyledLink>

          <StyledLink to="/RecipeAbout">
            <StyledIconButton>
              <InfoIcon />
            </StyledIconButton>
          </StyledLink>

          <StyledIconButton onClick={toggleSearch}>
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
