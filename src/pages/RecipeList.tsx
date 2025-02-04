import React, { useState, useEffect, useMemo } from "react";
import { Box, MenuItem, Select, InputLabel, FormControl, Grid, Typography } from "@mui/material";
import { fetchRecipeList, fetchRecipeCategories } from "../utils/RecipeApi";  // 레시피 데이터 가져오기
import RecipeCard from "../components/RecipeCard";
import { Recipe } from '../types/RecipeTypes';
import PageNavigation from "../components/PageNavigation";
import RecipeSearch from "../components/RecipeSearch";
import RecipeCategoryFilter from "../components/RecipeCategoryFilter";
import { ButtonContainer, CategoryContainer, Title } from '../styles/RecipeListStyles'; // 타입을 types에서 임포트
import RecipeMethodsFilter from "../components/RecipeMethodsFilter";
import { RenderPlaceholderCards } from "../components/RenderPlaceholderCards";

const RecipeList: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  
//카테고리 함수 조리방법 보류생각중  
  const [selectedRecipeCategory, setSelectedRecipeCategory] = useState<string>(''); // 선택된 요리종류
  const [selectedRecipeMethods, setSelectedRecipeMethods] = useState<string>(''); // 선택된 조리방법



  const [startIdx, setStartIdx] = useState<number>(1);
  const [endIdx, setEndIdx] = useState<number>(18);
  const [totalItems, setTotalItems] = useState<number>(0);




useEffect(() => {
      getRecipes();
  }, [startIdx, endIdx, selectedRecipeCategory]);  // location.state 변경될 때마다 useEffect 실행

//  // 필터링된 레시피 목록
 const filteredRecipes = recipes.filter((recipe) => {
  const methodMatch = selectedRecipeMethods === '' || recipe.RCP_WAY2 === selectedRecipeMethods;

  return methodMatch ;
});


const getRecipes = async () => {
    try {
        setLoading(true);
        let data;
        if(selectedRecipeCategory){
            data = await fetchRecipeCategories(selectedRecipeCategory ,startIdx, endIdx);
            // console.log("data :: ", data);
        } else {
            data = await fetchRecipeList(startIdx, endIdx);
          }
          if (data) {
            setRecipes(data.recipes || []); // 레시피 데이터 업데이트
            setTotalItems(data.totalCount || 0); // 전체 아이템 개수 업데이트
            // console.log("recipes.RCP_WAY2", recipes.RCP_WAY2);
          }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching recipes: ", error);
    }
  };
// 메모 해서 조회 데이터 저장한다지만 안되는거 같다 느림
const memoizedRecipes = useMemo(() => recipes, [recipes]);


// 요리종류 필터 변경 핸들러
const handleCategoryChange = (category: string) => {
  setSelectedRecipeCategory(category.trim() === "국&찌개" ? "국" : category);
    console.log('선택된 카테고리:', category);  // 콘솔에 선택된 카테고리 출력
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
    <Box sx={{ marginBottom: 2 }}>
         <h1>Recipe List</h1>
         
         <CategoryContainer>
      <Title>카테고리</Title>
      {/* <hr /> */}
      {/* <ButtonContainer> */}
        <RecipeCategoryFilter
          selectedRecipeCategory={selectedRecipeCategory}
          onCategoryChange={handleCategoryChange}
        />
        <RecipeMethodsFilter
          selectedRecipeMethods={selectedRecipeMethods}
          onRecipeMethodsChange={handleRecipeMethodsChange}
        />
        {/* </ButtonContainer> */}
    </CategoryContainer>
        {/* <ExcludeIngredientFilter
         excludedIngredients={selectedexcludedIngredients}
         onExcludedIngredientsChange={handleFilterChange}
         /> */}
         {/* <RecipeCategoryFilter
        selectedRecipeCategory={selectedRecipeCategory}
        onCategoryChange={handleCategoryChange}
      /> */}

      {/* 로딩 중일 때 표시 */}
      {loading ? (
        // <Typography>Loading...</Typography>
        RenderPlaceholderCards(filteredRecipes.length, recipes.length)
      ) : (
        
        <Grid container spacing={3}>
            {/* {recipes.map((recipe) => ( */}
          {/* {memoizedRecipes.map((recipe) => ( */}
          {filteredRecipes.map((recipe) => (
                        <Grid item xs={12} sm={6} md={4} key={recipe.RCP_SEQ}>
                        <RecipeCard
                          title={recipe.RCP_NM}
                          description={recipe.RCP_PAT2 || 'No description available.'}
                          descriptionMethod={recipe.RCP_WAY2 || 'No description available.'}
                          image={recipe.ATT_FILE_NO_MAIN || 'https://via.placeholder.com/150'}
                          recipeAll={recipe}
                        />
                      </Grid>
          ))}
          {/* 부족한 공간을 채우기 위한 빈 카드 렌더링 */}
{filteredRecipes.length < 5 && RenderPlaceholderCards(filteredRecipes.length, recipes.length)}
        </Grid>
      )}

      {/* 페이지네이션 (단순 예시) */}
      <PageNavigation
        startIdx={startIdx}
        endIdx={endIdx}
        totalItems={totalItems}
        onPageChange={handlePageChange}
      />
    </Box>
  );
};

export default RecipeList;
