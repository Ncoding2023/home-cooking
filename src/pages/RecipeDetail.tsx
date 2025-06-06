import React, { useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, CardContent, Box, Grid, CircularProgress } from '@mui/material';
import { InfoText, IngredientItem, IngredientsContent, IngredientsTitle, RecipeDetailContainer, RecipeImage, StepContainer, StepImage, StyledBox, StyledCard, StyledCardContent, StyledGridContainerThree, StyledGridContainerTwo, StyledGridItem, StyledIngredientsCard, StyledTypographyH4, StyledTypographySubtitle, TipContainer} from '../styles/RecipeDetailStyles'; // 타입을 types에서 임포트
import { InfoCard } from '../styles/RecipeDetailStyles'; 
import { Recipe, RecipeDetailProps } from '../types/RecipeTypes';
import { fetchRecipeRelatedFoodsNms } from '../utils/RecipeApi';
import RecipeCard from '../components/RecipeCard';

const RecipeDetail: React.FC = () => {
  const location = useLocation();
  const recipe: RecipeDetailProps = location.state?.recipeAll;
  const [recipeRelateds, setRecipeRelateds] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const query = recipe.RCP_PAT2; // RCP_PAT2가 없으면 기본값 사용

  const getRecipes = useCallback(async () => {
    if (query) {
      console.log("query", query);
      setLoading(true);
      let queryStr:string;
      queryStr = query;

      queryStr = queryStr === "국&찌개" ? "국" : query;
      console.log("queryStr", queryStr);
      const data = await fetchRecipeRelatedFoodsNms(queryStr);
      setRecipeRelateds(data);
      setLoading(false);
    }
  }, [query]); 
  
  useEffect(() => {
    getRecipes();
  }, [getRecipes]);

console.log(recipe);
  if (!recipe) {
    return <div>레시피를 찾을 수 없습니다.</div>;
  }

  return (
    <RecipeDetailContainer>
      <StyledBox>
        <StyledCard>
        <RecipeImage
          component="img"
          image={recipe.ATT_FILE_NO_MAIN || 'https://via.placeholder.com/150'}
          alt={recipe.RCP_NM} 
          height="300"
        />
        <StyledCardContent>
      <StyledTypographyH4 variant="h4" gutterBottom>
        {recipe.RCP_NM}
      </StyledTypographyH4>
      <StyledTypographySubtitle variant="subtitle1" gutterBottom>
        <strong>방법:</strong> {recipe.RCP_WAY2} | <strong>종류:</strong> {recipe.RCP_PAT2}
      </StyledTypographySubtitle>
    </StyledCardContent>
      </StyledCard>
      </StyledBox>

<StyledBox>
<IngredientsTitle variant="h5" gutterBottom>
        구성 재료
      </IngredientsTitle>
      <StyledIngredientsCard>
        <StyledCardContent>
          <IngredientsContent>
            {recipe.RCP_PARTS_DTLS
              ? recipe.RCP_PARTS_DTLS.split("\n").map((line, index) => (
                  <IngredientItem key={index} variant="body1" gutterBottom data-index={index}>
                    {line}
                  </IngredientItem>
                ))
              : null}
          </IngredientsContent>
        </StyledCardContent>
      </StyledIngredientsCard>
</StyledBox>
       {/* 재료 영역
      <Box mt={3}>
       <Typography variant="h5" gutterBottom>
          구성 재료
      </Typography>
      <StyledCard>
        <CardContent>
          <IngredientsContent>
            {recipe.RCP_PARTS_DTLS || "".split("\n").map((line, index) => (
              <IngredientItem key={index} variant="body1"  gutterBottom data-index={index} >
                {line}
              </IngredientItem>
            ))}
          </IngredientsContent>
        </CardContent>
      </StyledCard>
      </Box> */}

<StyledBox>
    <StyledTypographyH4 variant="h5" gutterBottom>
      영양 정보
    </StyledTypographyH4>
      {/* 첫 번째 줄 (3개) */}
      <StyledGridContainerThree>
      <StyledGridItem>
        <InfoCard>
          <CardContent>
            <InfoText variant="body1">
              <strong>탄수화물:</strong> {recipe.INFO_CAR} g
            </InfoText>
          </CardContent>
        </InfoCard>
      </StyledGridItem>
      <StyledGridItem>
        <InfoCard>
          <CardContent>
            <InfoText variant="body1">
              <strong>단백질:</strong> {recipe.INFO_PRO} g
            </InfoText>
          </CardContent>
        </InfoCard>
      </StyledGridItem>
      <StyledGridItem>
        <InfoCard>
          <CardContent>
            <InfoText variant="body1">
              <strong>지방:</strong> {recipe.INFO_FAT} g
            </InfoText>
          </CardContent>
        </InfoCard>
      </StyledGridItem>
    </StyledGridContainerThree>

    {/* 두 번째 줄 (2개) */}
    <StyledGridContainerTwo>
      <StyledGridItem>
        <InfoCard>
          <CardContent>
            <InfoText variant="body1">
              <strong>열량:</strong> {recipe.INFO_ENG} kcal
            </InfoText>
          </CardContent>
        </InfoCard>
      </StyledGridItem>
      <StyledGridItem>
        <InfoCard>
          <CardContent>
            <InfoText variant="body1">
              <strong>나트륨:</strong> {recipe.INFO_NA} mg
            </InfoText>
          </CardContent>
        </InfoCard>
      </StyledGridItem>
    </StyledGridContainerTwo>

  </StyledBox>

    {/* 조리 과정 */}
    <Box mt={4}>
      <Typography variant="h5" gutterBottom>
        조리 과정
      </Typography>

      {Array.from({ length: 20 }, (_, i) => {
        const step = recipe[`MANUAL${String(i + 1).padStart(2, '0')}`];
        const stepImage = recipe[`MANUAL_IMG${String(i + 1).padStart(2, '0')}`];

        if (!step) return null;

        return (
          <StepContainer key={i} elevation={3}>
            {stepImage && <StepImage src={stepImage} alt={`조리 단계 ${i + 1}`} />}
            <Typography variant="body1">{step}</Typography>
          </StepContainer>
        );
      })}

      {recipe.RCP_NA_TIP && (
        <TipContainer>
          <Typography variant="body2">
            <strong>요리 팁:</strong> {recipe.RCP_NA_TIP}
          </Typography>
        </TipContainer>
      )}
    </Box>
    
    <Box sx={{ display: 'flex', flexDirection: 'column' } } marginY={5}>
{loading ? (
    <CircularProgress />  // 로딩 중일 때 표시할 컴포넌트 (예: 로딩 스피너)
  ) : (
    <Grid container spacing={3}>
<Typography variant="h4" sx={{ display: 'block', textAlign: 'center', width: '100%' }}>
    관련 레시피
</Typography>
      {recipeRelateds.map((recipeRelated: any) => (
        <Grid item xs={12} sm={6} md={4} key={recipeRelated.RCP_SEQ}>
          <RecipeCard
            title={recipeRelated.RCP_NM}
            description={recipeRelated.RCP_PAT2 || "No description available."}
            descriptionMethod={recipeRelated.RCP_WAY2 || "No description available."}
            image={recipeRelated.ATT_FILE_NO_MAIN || "https://via.placeholder.com/150"}
            recipeAll={recipeRelated}
          />
        </Grid>
      ))}
    </Grid>
  )}
</Box>
  </RecipeDetailContainer>
  );
};

export default RecipeDetail;
