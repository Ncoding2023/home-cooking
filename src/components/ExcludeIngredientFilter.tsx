import React from 'react';
import { Chip, Box, Typography } from '@mui/material';
import { ExcludeIngredientFilterProps } from '../types/RecipeTypes';

const ExcludeIngredientFilter: React.FC<ExcludeIngredientFilterProps> = ({
  excludedIngredients,
  onExcludedIngredientsChange,
}) => {
  const ingredients = ["설탕", "저염", "비건", "밀가루"];

  // Function to handle the ingredient exclusion logic
  const handleExcludedIngredientsChange = (ingredient: string) => {
    let updatedExclusions = '';
    
    // Logic for each ingredient
    if (ingredient === '설탕') {
      // Filter out recipes with sugar
      updatedExclusions = '설탕';
    } else if (ingredient === '저염') {
      // Filter out recipes with high sodium
    //   updatedExclusions = '저염';
    } else if (ingredient === '비건') {
      // Filter out recipes containing any animal products (e.g., meat, dairy)
      updatedExclusions = '비건';
    } else if (ingredient === '밀가루') {
      // Filter out recipes with flour
      updatedExclusions = '밀가루';
    } else {
      updatedExclusions = '';
    }

    // Trigger the callback with the updated exclusions
    onExcludedIngredientsChange(updatedExclusions);
  };

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      <Typography variant="h6" gutterBottom>
        재료제외
      </Typography>
      <Box>
        {/* 전체 카테고리 */}
        <Chip
          label="없음"
          color={excludedIngredients === '' ? 'primary' : 'default'}
          onClick={() => onExcludedIngredientsChange('')}
          clickable
        />
        {/* 개별 카테고리 */}
        {ingredients.map((ingredient) => (
          <Chip
            key={ingredient}
            label={ingredient}
            color={excludedIngredients === ingredient ? 'primary' : 'default'}
            onClick={() => handleExcludedIngredientsChange(ingredient)}
            clickable
          />
        ))}
      </Box>
    </Box>
  );
};

export default ExcludeIngredientFilter;
