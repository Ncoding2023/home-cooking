import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import RecipeSearchArray from '../components/RecipeSearch';
import RecipeCard from '../components/RecipeCard';
import { fetchRecipesExclude } from '../utils/RecipeApi';
import { Recipe, RecipeAll } from '../types/RecipeTypes';

const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState<RecipeAll[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSearch = async () => {
    if (!query) {
      setError('Please enter a search term.');
      return;
    }

    setLoading(true);
    setError('');
    setRecipes([]);

    try {
      const results = await fetchRecipesExclude(query);
      setRecipes(results);
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
      <Box sx={{ p: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        해당 재료 미포함 
      </Typography>
        {/* Recipe Search */}

      {/* Recipe Search */}
      <RecipeSearchArray
        query={query}
        onQueryChange={setQuery}
        onSearch={handleSearch}
        isLoading={loading}
      />

      {/* Error Message */}
      {error && (
        <Typography variant="body1" color="error" gutterBottom>
          {error}
        </Typography>
      )}

      {/* Recipe Results */}
      <Grid container spacing={3}>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe.RCP_SEQ}>
              <RecipeCard
                title={recipe.RCP_NM}
                description={recipe.RCP_PAT2 || 'No description available.'}
                descriptionMethod={recipe.RCP_WAY2 || 'No description available.'}
                image={recipe.ATT_FILE_NO_MAIN || 'https://via.placeholder.com/150'}
                recipeAll={recipe}
              />
            </Grid>
          ))
        ) : (
          !loading && (
            <Typography variant="body1" color="text.secondary">
              No recipes found. Try a different search.
            </Typography>
          )
        )}
      </Grid>
    </Box>
  );
};

export default Home;
