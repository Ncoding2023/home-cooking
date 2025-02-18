import RecipeCard from '../components/RecipeCard';
import { RenderPlaceholderCards } from '../components/RenderPlaceholderCards';
import { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';

const RecipeFavorite = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  return (
    <Box sx={{ marginTop: 10 , width: 950}}>
        
      <Typography variant="h4" gutterBottom>
        찜한 레시피 목록
      </Typography>

      {favorites.length === 0 ? (
        <Typography variant="body1">찜한 레시피가 없습니다.</Typography>
      ) : (
        <Grid container spacing={3}>
          {favorites.map((favorite) => (
            <Grid item xs={12} sm={6} md={4} key={favorite.RCP_SEQ}>
              <RecipeCard
                title={favorite.title}
                description={favorite.description || 'No description available.'}
                descriptionMethod={favorite.descriptionMethod || 'No description available.'}
                image={favorite.image || 'https://via.placeholder.com/150'}
                recipeAll={favorite.recipeAll}
              />
            </Grid>
          ))}

          {/* 찜 목록이 부족할 경우 더미 카드 추가 */}
          {/* {favorites.length < 5 && <RenderPlaceholderCards currentCount={favorites.length} totalCount={5} />} */}
          {favorites.length < 4 &&
            RenderPlaceholderCards(favorites.length, 4)}
        </Grid>
      )}
    </Box>
  );
};

export default RecipeFavorite;
