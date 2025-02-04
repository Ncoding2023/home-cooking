import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import RecipeSearch from '../components/RecipeSearch';
import RecipeCard from '../components/RecipeCard';
import { fetchRecipeDtls, fetchRecipeNms } from '../utils/RecipeApi';
import RecipeCarousel from '../components/RecipeCarousel';
import { Recipe } from '../types/RecipeTypes';
import { useNavigate } from 'react-router-dom';
import PatchNotes from '../components/PatchNotes';


const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  
// console.log(apiKey);  // 실제 API 키가 출력됩니다.
//   const API_KEY = 'yourApiKeyHere'; // Replace with your actual API key
const handleSearch = () => {
  if (query.trim()) {
    // 검색 버튼을 클릭하면 SearchPage로 이동
    navigate(`/search?query=${encodeURIComponent(query)}`);
  }
};  

  // const handleSearch = async () => {
  //   if (!query) {
  //     setError('Please enter a search term.');
  //     return;
  //   }

  //   setLoading(true);
  //   setError('');
  //   setRecipes([]);

  //   try {
  //   //   const results = await fetchRecipes(query, apiKey);
  //     const json1 = await fetchRecipeNms(query);
  //     const json2 = await fetchRecipeDtls(query);

  //     const combinedData = [...json1, ...json2];
  //     const response = combinedData.filter((value, index, self) =>
  //     index === self.findIndex((t) => t.RCP_SEQ === value.RCP_SEQ)
  //     );


  //     setRecipes(response);
  //   } catch (err) {
  //     setError('Failed to fetch recipes. Please try again.');
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  return (
      <Box sx={{ p: 3 }}>
      {/* <Typography variant="h4" component="h1" gutterBottom> */}
      <RecipeCarousel />
        {/* Recipe Search */}
      {/* </Typography> */}

      {/* Recipe Search */}
      <RecipeSearch
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
      {/* 홈페이지 하단에 게시판 추가 */}
      <Box sx={{ padding: 3, marginTop: 4, borderTop: '2px solid #ccc' }}>
  <PatchNotes />  {/* 게시판 컴포넌트 호출 */}
</Box>
    </Box>
  );
  

};

export default Home;
