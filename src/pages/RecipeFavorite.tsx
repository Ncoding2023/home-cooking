import RecipeCard from '../components/RecipeCard';
import { RenderPlaceholderCards } from '../components/RenderPlaceholderCards';
import { useEffect, useState } from 'react';
import { Grid, Typography, Box } from '@mui/material';

const RecipeFavorite = () => {
  const [favorites, setFavorites] = useState<any[]>([]);

  // 페이지 로드 시 localStorage에서 찜 목록을 불러오기
  useEffect(() => {
    const savedFavorites = localStorage.getItem("favorites");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // 찜 상태 토글 함수 (RecipeCard에서 사용)
  const handleFavoriteToggle = (RCP_SEQ: string) => {
    const savedFavorites = localStorage.getItem("favorites");
    let favorites = savedFavorites ? JSON.parse(savedFavorites) : [];

    // 해당 레시피의 찜 상태를 반전
    const updatedFavorites = favorites.map((favorite: any) => {
      if (favorite.RCP_SEQ === RCP_SEQ) {
        favorite.isFavorited = !favorite.isFavorited;
      }
      return favorite;
    });

    // 찜 상태를 localStorage에 업데이트
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    // 상태 업데이트
    setFavorites(updatedFavorites);
  };

  // 찜 목록에서 레시피 삭제하기
  const handleRemoveFavorite = (RCP_SEQ: string) => {
    const savedFavorites = localStorage.getItem("favorites");
    let favorites = savedFavorites ? JSON.parse(savedFavorites) : [];

    // 해당 레시피를 찜 목록에서 제거
    const updatedFavorites = favorites.filter((favorite: any) => favorite.RCP_SEQ !== RCP_SEQ);

    // 찜 목록을 localStorage에 다시 저장
    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

    // 상태 업데이트
    setFavorites(updatedFavorites);
  };

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
