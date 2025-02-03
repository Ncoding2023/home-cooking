import React from 'react';
import { useLocation } from 'react-router-dom';
import { Typography, Card, CardMedia, CardContent, Box, Grid, Paper } from '@mui/material';
import { InfoText, IngredientItem, IngredientsContent, IngredientsTitle, NutritionInfo, RecipeDetailContainer, RecipeImage, StepCard, StepContainer, StepImage, StyledCard, TipContainer} from '../styles/RecipeDetailStyles'; // 타입을 types에서 임포트
import { NutritionTitle, InfoCard } from '../styles/RecipeDetailStyles'; // 타입을 types에서 임포트
import { RecipeDetailProps } from '../types/RecipeTypes';
// import LightbulbIcon from '@mui/icons-material/Lightbulb';



const RecipeDetail: React.FC = () => {
  const location = useLocation();
  const recipe: RecipeDetailProps = location.state?.recipeAll;
console.log(recipe);
  if (!recipe) {
    return <div>레시피를 찾을 수 없습니다.</div>;
  }

  return (
    <RecipeDetailContainer>
      <Box>
          <StyledCard>
        <RecipeImage
          component="img"
          image={recipe.ATT_FILE_NO_MAIN || 'https://via.placeholder.com/150'}
          alt={recipe.RCP_NM}
          height="300"
        />
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {recipe.RCP_NM}
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            <strong>방법:</strong> {recipe.RCP_WAY2} | <strong>종류:</strong> {recipe.RCP_PAT2}
          </Typography>
        </CardContent>
      </StyledCard>
      </Box>

      



       {/* 재료 영역 */}
       <Box mt={3}>
       
       <Typography variant="h5" gutterBottom>
          구성 재료
      </Typography>
            {/* <IngredientsTitle>
              재료:
            </IngredientsTitle> */}
      <StyledCard>
        <CardContent>
          <IngredientsContent>
            {recipe.RCP_PARTS_DTLS.split("\n").map((line, index) => (
              <IngredientItem key={index} variant="body1"  gutterBottom index={index} >
                {line}
              </IngredientItem>
            ))}
          </IngredientsContent>
        </CardContent>
      </StyledCard>
      </Box>





      <Box>
      {/* <Typography variant="h5" gutterBottom>
      영양 정보
      </Typography> */}
      {/* <Paper elevation={3} sx={{ padding: '16px', borderRadius: '8px' }}> */}
        {/* <NutritionTitle variant="h6">영양 정보</NutritionTitle> */}
        <Typography variant="h5" gutterBottom>
      영양 정보
      </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={4}>
            <InfoCard>
              <CardContent>
                <InfoText variant="body1">
                <strong>탄수화물:</strong> {recipe.INFO_CAR} g
                </InfoText>
              </CardContent>
            </InfoCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <InfoCard>
              <CardContent>
                <InfoText variant="body1">
                <strong>단백질:</strong> {recipe.INFO_PRO} g
                </InfoText>
              </CardContent>
            </InfoCard>
          </Grid>
          <Grid item xs={12} sm={4}>
            <InfoCard>
              <CardContent>
                <InfoText variant="body1">
                <strong>지방:</strong> {recipe.INFO_FAT} g
                </InfoText>
              </CardContent>
            </InfoCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InfoCard>
              <CardContent>
                <InfoText variant="body1">
                <strong>열량:</strong> {recipe.INFO_ENG} kcal
                  </InfoText>
              </CardContent>
            </InfoCard>
          </Grid>
          <Grid item xs={12} sm={6}>
            <InfoCard>
              <CardContent>
                <InfoText variant="body1"><strong>나트륨:</strong> {recipe.INFO_NA} mg</InfoText>
              </CardContent>
            </InfoCard>
          </Grid>
          {/* <Grid item xs={12} sm={6}> apl에 데이터가 없어
            <InfoCard>
              <CardContent>
                <InfoText variant="body1"><strong>중량:</strong> {recipe.INFO_WGT} mg</InfoText>
              </CardContent>
            </InfoCard>
          </Grid> */}
        </Grid>
      {/* </Paper> */}
    </Box>






    {/* 조리 과정 */}
    <Box mt={3}>
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
          {/* <LightbulbIcon color="warning" /> */}
          <Typography variant="body2">
            <strong>요리 팁:</strong> {recipe.RCP_NA_TIP}
          </Typography>
        </TipContainer>
      )}
    </Box>
    

    

  </RecipeDetailContainer>

  
  );
};

export default RecipeDetail;
