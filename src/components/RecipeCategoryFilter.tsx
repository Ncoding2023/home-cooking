import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { RecipeCategoryFilterProps } from '../types/RecipeTypes';

const RecipeCategoryFilter: React.FC<RecipeCategoryFilterProps> = ({
  selectedRecipeCategory,
  onCategoryChange,
}) => {
  const categories = ['국&찌개', '반찬', '밥', '일품', '후식', '기타'];

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      <Typography variant="h6" gutterBottom>
        종류
      </Typography>
      <Box >
        {/* 전체 카테고리 */}
        <Chip
          label="전체"
          color={selectedRecipeCategory === '' ? 'primary' : 'default'}
          onClick={() => onCategoryChange('')}
          clickable
        />
        {/* 개별 카테고리 */}
        {categories.map((category) => (
          <Chip
            key={category}
            label={category}
            color={selectedRecipeCategory === category ? 'primary' : 'default'}
            onClick={() => onCategoryChange(category)}
            clickable
          />
        ))}
      </Box>
    </Box>
  );
};

export default RecipeCategoryFilter;
