import React from 'react';
import { Box, TextField, Button } from '@mui/material';
import { RecipeSearchArrayProps, RecipeSearchProps } from '../types/RecipeTypes';

const RecipeSearch: React.FC<RecipeSearchProps> = ({ query, onQueryChange, onSearch, isLoading }) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', marginBottom: 4 }}>
      <TextField
        label="Search for a recipe"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={onSearch} disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
      </Button>
    </Box>
  );
};

const RecipeSearchArray: React.FC<RecipeSearchArrayProps> = ({ query, onQueryChange, onSearch, isLoading }) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', marginBottom: 4 }}>
      <TextField
        label="Search for a recipe"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={onSearch} disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
      </Button>
    </Box>
  );
};

export default RecipeSearch;



// export default RecipeSearchArray;
