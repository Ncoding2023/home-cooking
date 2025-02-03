import React, { useState } from 'react';
// import { Box, Typography } from '@mui/material';
import { Box, Typography, Card, CardContent, CardMedia, Chip, colors, Button, Grid } from '@mui/material';
import ExcludeIngredientFilter from '../components/ExcludeIngredientFilter';
import RecipeMethodsFilter from '../components/RecipeMethodsFilter';
import RecipeCategoryFilter from '../components/RecipeCategoryFilter';
import {recipesTest} from '../types/RecipeContext';
import RecipeCard from '../components/RecipeCard';
import styled from "styled-components";
// recipesTest 
const categories: string[] = ["한식", "양식", "일식"];

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
  background-color: #f5f5f5;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column; /* 세로 정렬 */
  align-items: center;
  gap: 12px;
`;

// const ButtonContainer = styled.div`
//   display: flex;
//   gap: 12px;
// `;



const Test1 = () => {
  const [selectedRecipeMethods, setSelectedRecipeMethods] = useState<string>(''); // 선택된 조리방법
  const [selectedRecipeCategory, setSelectedRecipeCategory] = useState<string>(''); // 선택된 카테고리
  const [selectedexcludedIngredients, setExcludedIngredients] = useState<string>(''); // 제외된 재료
  // const [excludedIngredients, setExcludedIngredients] = useState<string[]>([]); // 제외된 재료

  // 조리방법 필터 변경 핸들러
  const handleRecipeMethodsChange = (method: string) => {
    setSelectedRecipeMethods(method);
  };

  // 카테고리 필터 변경 핸들러
  const handleCategoryChange = (category: string) => {
    setSelectedRecipeCategory(category);
  };

  // 필터 상태 변경 핸들러 (제외된 재료)
  const handleFilterChange = (ingredient: string) => {
  // const handleFilterChange = (excludedIngredients: string[]) => {
    setExcludedIngredients(ingredient);
  };

  // 필터링된 레시피 목록
  const filteredRecipes = recipesTest.filter((recipe) => {
    const methodMatch = selectedRecipeMethods === '' || recipe.RCP_WAY2 === selectedRecipeMethods;
    const categoryMatch = selectedRecipeCategory === '' || recipe.RCP_PAT2 === selectedRecipeCategory;
    // 제외된 재료가 포함되지 않으면 매칭
const ingredientsMatch =
selectedexcludedIngredients === '' ||
(Array.isArray(recipe.RCP_PARTS_DTLS)
  ? !recipe.RCP_PARTS_DTLS.some((part) => part.includes(selectedexcludedIngredients))
  : !recipe.RCP_PARTS_DTLS.includes(selectedexcludedIngredients)); // RCP_PARTS_DTLS가 문자열이면 includes로 처리
    // const ingredientsMatch = !excludedIngredients.some((ingredient) => recipe.RCP_PARTS_DTLS.includes(ingredient));
    // const ingredientsMatch = !excludedIngredients.some((ingredient) => recipe.RCP_PARTS_DTLS.includes(ingredient));
    // const lowSodiumMatch = !selectedexcludedIngredients.includes('저염') || recipe.INFO_NA <= 500; // 저염 필터 조건

    return methodMatch && categoryMatch && ingredientsMatch;
  });

  return (
    // <Box sx={{ padding: 3 }} >
    <Box sx={{minHeight: '50px', maxHeight: '300px' }}>
      <CategoryContainer>
      <Title>카테고리</Title>
      <ButtonContainer>
        <RecipeMethodsFilter
          selectedRecipeMethods={selectedRecipeMethods}
          onRecipeMethodsChange={handleRecipeMethodsChange}
        />
        <RecipeCategoryFilter
          selectedRecipeCategory={selectedRecipeCategory}
          onCategoryChange={handleCategoryChange}
        />
        {/* <ExcludeIngredientFilter handleFilterChange={handleFilterChange} /> */}
        <ExcludeIngredientFilter
         excludedIngredients={selectedexcludedIngredients}
         onExcludedIngredientsChange={handleFilterChange}
         />
        </ButtonContainer>
    </CategoryContainer>
      {/* 레시피 출력 */}
      {/* <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: 2 }}> */}
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2 }}>
        {filteredRecipes.map((recipe) => (
          <Box key={recipe.RCP_SEQ} sx={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px' }}>
          
            <RecipeCard
            title={recipe.RCP_NM}
            description={recipe.RCP_PAT2 || 'No description available.'}
            descriptionMethod={recipe.RCP_WAY2 || 'No description available.'}
            image={recipe.ATT_FILE_NO_MAIN || 'https://via.placeholder.com/150'}
            recipeAll={recipe}
          />
            {/* <Typography variant="h6">{recipe.RCP_NM}</Typography> */}
            <Typography variant="body2">{recipe.RCP_WAY2}</Typography>
            <Typography variant="body2">{recipe.RCP_PAT2}</Typography>
            <Typography variant="body2">열량: {recipe.INFO_ENG} kcal</Typography>
            <Typography variant="body2">나트륨: {recipe.INFO_NA} mg</Typography>
          </Box>
        ))}
      </Box>

    </Box>
    
  );
};

export default Test1;
