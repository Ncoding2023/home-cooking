import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
} from "@mui/material";
import { fetchRecipeList, fetchRecipeCategories } from "../utils/RecipeApi";
import RecipeCard from "../components/RecipeCard";
import { Recipe } from "../types/RecipeTypes";
import PageNavigation from "../components/PageNavigation";
import RecipeCategoryFilter from "../components/RecipeCategoryFilter";
import {
  RecipeListContainer,
  CategoryContainer,
  Title,
} from "../styles/RecipeListStyles";
import RecipeMethodsFilter from "../components/RecipeMethodsFilter";
import { RenderPlaceholderCards } from "../components/RenderPlaceholderCards";

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const [selectedRecipeCategory, setSelectedRecipeCategory] =
    useState<string>(""); // 선택된 요리종류
  const [selectedRecipeMethods, setSelectedRecipeMethods] =
    useState<string>(""); // 선택된 조리방법

  const [startIdx, setStartIdx] = useState<number>(1);
  const [endIdx, setEndIdx] = useState<number>(18);
  const [totalItems, setTotalItems] = useState<number>(0);

  useEffect(() => {
    getRecipes();
  }, [startIdx, endIdx, selectedRecipeCategory]); // location.state 변경될 때마다 useEffect 실행

  //  // 필터링된 레시피 목록
  const filteredRecipes = recipes.filter((recipe) => {
    const methodMatch =
      selectedRecipeMethods === "" || recipe.RCP_WAY2 === selectedRecipeMethods;

    return methodMatch;
  });

  const getRecipes = async () => {
    try {
      setLoading(true);
      let data;
      if (selectedRecipeCategory) {
        data = await fetchRecipeCategories(
          selectedRecipeCategory,
          startIdx,
          endIdx
        );
      } else {
        data = await fetchRecipeList(startIdx, endIdx);
      }
      if (data) {
        setRecipes(data.recipes || []); // 레시피 데이터 업데이트
        setTotalItems(data.totalCount || 0); // 전체 아이템 개수 업데이트
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes: ", error);
    }
  };

  // 요리종류 필터 변경 핸들러
  const handleCategoryChange = (category: string) => {
    setSelectedRecipeCategory(category.trim() === "국&찌개" ? "국" : category);
    console.log("선택된 카테고리:", category); // 콘솔에 선택된 카테고리 출력
  };
  // 조리방법 필터 변경 핸들러
  const handleRecipeMethodsChange = (method: string) => {
    setSelectedRecipeMethods(method);
  };

  //페이지네이션
  const handlePageChange = (newStartIdx: number, newEndIdx: number) => {
    const actualEndIdx = newEndIdx > totalItems ? totalItems : newEndIdx;
    setStartIdx(newStartIdx);
    setEndIdx(actualEndIdx);
  };

  return (
    <Box sx={{ marginBottom: 2 , width: 950}}>
      <RecipeListContainer>
      
      <CategoryContainer>
        <Title>카테고리</Title>
        <RecipeCategoryFilter
          selectedRecipeCategory={selectedRecipeCategory}
          onCategoryChange={handleCategoryChange}
        />
        <RecipeMethodsFilter
          selectedRecipeMethods={selectedRecipeMethods}
          onRecipeMethodsChange={handleRecipeMethodsChange}
        />
      </CategoryContainer>
      {/* 로딩 중일 때 표시 */}
      {loading ? (
        RenderPlaceholderCards(filteredRecipes.length, recipes.length)
      ) : (
        
        <Grid container spacing={3}>
          {filteredRecipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.RCP_SEQ}>
              <RecipeCard
                title={recipe.RCP_NM}
                description={recipe.RCP_PAT2 || "No description available."}
                descriptionMethod={
                  recipe.RCP_WAY2 || "No description available."
                }
                image={
                  recipe.ATT_FILE_NO_MAIN || "https://via.placeholder.com/150"
                }
                recipeAll={recipe}
              />
            </Grid>
          ))}
          {filteredRecipes.length < 5 &&
            RenderPlaceholderCards(filteredRecipes.length, recipes.length)}
        </Grid>
      )}

      <PageNavigation
        startIdx={startIdx}
        endIdx={endIdx}
        totalItems={totalItems}
        onPageChange={handlePageChange}
      />
      </RecipeListContainer>
    </Box>
  );
};

export default RecipeList;
