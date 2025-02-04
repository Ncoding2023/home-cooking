// RecipeSearchPage.tsx
import React, { useState,useEffect } from 'react';
import { Box, Grid, Typography, CircularProgress, Paper } from '@mui/material';
import RecipeSearch from '../components/RecipeSearch';
import RecipeCard from '../components/RecipeCard';
import { fetchRecipeDtls, fetchRecipeNms } from '../utils/RecipeApi';
import RecipeCarousel from '../components/RecipeCarousel';
import { Recipe } from '../types/RecipeTypes';
import { useLocation } from 'react-router-dom';
// import RecipeSearch from "../components/RecipeSearch";

const RecipeSearchPage: React.FC = () => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query") || "";
//   const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  
// console.log(apiKey);  // 실제 API 키가 출력됩니다.
//   const API_KEY = 'yourApiKeyHere'; // Replace with your actual API key
  
  const fetchResults  = async () => {
    if (!query) {
      setError('Please enter a search term.');
      return;
    }

    setLoading(true);
    setError('');
    setRecipes([]);

    try {
    //   const results = await fetchRecipes(query, apiKey);
      const json1 = await fetchRecipeNms(query);
      const json2 = await fetchRecipeDtls(query);

      const combinedData = [...json1, ...json2];
      const response = combinedData.filter((value, index, self) =>
      index === self.findIndex((t) => t.RCP_SEQ === value.RCP_SEQ)
      );


      setRecipes(response);
    } catch (err) {
      setError('Failed to fetch recipes. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (query) {
        console.log("recipes",recipes);
        fetchResults();
      }
    }, [query]);
  

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h3" gutterBottom sx={{ fontWeight: 600 }}>
        {query}에 대한 결과
      </Typography>
      <Typography variant="h6" gutterBottom sx={{ color: 'text.secondary' }}>
        검색 결과 {recipes.length}개
      </Typography>

      {/* Error Message */}
      {error && (
        <Typography variant="body1" color="error" gutterBottom>
          {error}
        </Typography>
      )}

      {/* Loading Spinner */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {recipes.length > 0 ? (
            recipes.map((recipe) => (
              <Grid item xs={12} sm={6} md={4} key={recipe.RCP_SEQ}>
                <Paper sx={{ p: 2, borderRadius: 2, boxShadow: 3 }}>
                  <RecipeCard
                    title={recipe.RCP_NM}
                    description={recipe.RCP_PAT2 || 'No description available.'}
                    descriptionMethod={recipe.RCP_WAY2 || 'No description available.'}
                    image={recipe.ATT_FILE_NO_MAIN || 'https://via.placeholder.com/150'}
                    recipeAll={recipe}
                  />
                </Paper>
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
      )}
    </Box>
  );
};

export default RecipeSearchPage;
