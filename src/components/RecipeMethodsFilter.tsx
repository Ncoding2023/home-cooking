import React from 'react';
// import { Box, Chip, Typography } from '@mui/material';
import { RecipeMethodsFilterProps } from '../types/RecipeTypes';
// import { RecipeCategoryFilterProps } from '../types/RecipeTypes';
import { CategoryBox, CategoryContainer, CategoryItem, Title } from '../styles/RecipeCategoryFilterStyles';


const RecipeMethodsFilter: React.FC<RecipeMethodsFilterProps> = ({
  selectedRecipeMethods,
  onRecipeMethodsChange,
}) => {
  const methods = ['끓이기', '굽기', '튀기기', '찌기', '볶기', '기타'];

  return (
  //   <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
  //     <Typography variant="h6" gutterBottom>
  //       방법
  //     </Typography>
  //     <Box>
  //       {/* 전체 조리방법 */}
  //       <Chip
  //         label="전체"
  //         color={selectedRecipeMethods === '' ? 'primary' : 'default'}
  //         onClick={() => onRecipeMethodsChange('')}
  //         clickable
  //       />
  //       {/* 개별 조리방법 */}
  //       {methods.map((method) => (
  //         <Chip
  //           key={method}
  //           label={method}
  //           color={selectedRecipeMethods === method ? 'primary' : 'default'}
  //           onClick={() => onRecipeMethodsChange(method)}
  //           clickable
  //         />
  //       ))}
  //     </Box>
  //   </Box>
  // );


// const RecipeCategoryFilter: React.FC<RecipeCategoryFilterProps> = ({
//   selectedRecipeCategory,
//   onCategoryChange,
// }) => {
//   const categories = ['국&찌개', '반찬', '밥', '일품', '후식', '기타'];

//   return (
    <CategoryContainer>
      <Title>방식</Title>
      <CategoryBox>
        {/* 전체 카테고리 */}
        <CategoryItem
          isActive={selectedRecipeMethods === ''}
          onClick={() => onRecipeMethodsChange('')}
        >
          전체
        </CategoryItem>

        {/* 개별 카테고리 */}
        {methods.map((method) => (
          <CategoryItem
            key={method}
            isActive={selectedRecipeMethods === method}
            onClick={() => onRecipeMethodsChange(method)}
          >
            {method}
          </CategoryItem>
        ))}
      </CategoryBox>
    </CategoryContainer>
  );
};

// export default RecipeCategoryFilter;

export default RecipeMethodsFilter;
