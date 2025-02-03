import React from 'react';
import { Box, Chip, Typography } from '@mui/material';
import { RecipeMethodsFilterProps } from '../types/RecipeTypes';

const RecipeMethodsFilter: React.FC<RecipeMethodsFilterProps> = ({
  selectedRecipeMethods,
  onRecipeMethodsChange,
}) => {
  const methods = ['끓이기', '굽기', '튀기기', '찌기', '볶기', '기타'];

  return (
    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
      <Typography variant="h6" gutterBottom>
        방법
      </Typography>
      <Box>
        {/* 전체 조리방법 */}
        <Chip
          label="전체"
          color={selectedRecipeMethods === '' ? 'primary' : 'default'}
          onClick={() => onRecipeMethodsChange('')}
          clickable
        />
        {/* 개별 조리방법 */}
        {methods.map((method) => (
          <Chip
            key={method}
            label={method}
            color={selectedRecipeMethods === method ? 'primary' : 'default'}
            onClick={() => onRecipeMethodsChange(method)}
            clickable
          />
        ))}
      </Box>
    </Box>
  );
};

export default RecipeMethodsFilter;
