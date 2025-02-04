import React from 'react';
// import { Box, Typography } from '@mui/material';
import { RecipeCategoryFilterProps } from '../types/RecipeTypes';
import { CategoryBox, CategoryContainer, CategoryItem, Title } from '../styles/RecipeCategoryFilterStyles';



const RecipeCategoryFilter: React.FC<RecipeCategoryFilterProps> = ({
  selectedRecipeCategory,
  onCategoryChange,
}) => {
  const categories = ['국&찌개', '반찬', '밥', '일품', '후식', '기타'];
//   const formattedCategories = categories.map((category) =>
//   category === '밥' ? '\u00A0밥\u00A0\u00A0' : category // 비어 있는 공백 추가
// );
  return (
    <CategoryContainer>
      <Title>종류</Title>
      <CategoryBox>
        {/* 전체 카테고리 */}
        <CategoryItem
          isActive={selectedRecipeCategory === ''}
          onClick={() => onCategoryChange('')}
        >
          전체
        </CategoryItem>

        {/* 개별 카테고리 */}
        {/* {formattedCategories.map((category) => ( */}
        {categories.map((category) => (
          <CategoryItem
            key={category}
            // isActive={selectedRecipeCategory === category}
            isActive={selectedRecipeCategory === (category === '국&찌개' ? '국' : category)}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </CategoryItem>
        ))}
      </CategoryBox>
    </CategoryContainer>
  );
};

export default RecipeCategoryFilter;
