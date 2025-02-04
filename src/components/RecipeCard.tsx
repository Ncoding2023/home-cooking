import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { RecipeCardProps } from '../types/RecipeTypes';

const RecipeCard: React.FC<RecipeCardProps> = ({ title, description, descriptionMethod, image, recipeAll }) => {
    const navigate = useNavigate();  // navigate 함수 사용을 위해 선언

    // 카드 클릭 시 발생하는 이벤트 처리
    const handleCardClick = () => {
        navigate(`/recipe/${recipeAll.RCP_SEQ}`, {
            state: { recipeAll }, // 상태로 데이터 전달
          });  // 상세 페이지로 이동
      };

  return (
    // <Card>
    <Card sx={{
      // width: '90%',
      // width: '380px',
      // minHeight: '250px',
      display: 'flex',
      flexDirection: 'column',
      flexGrow: 1,  // 부모 요소의 공간을 차지하도록 설정
    }}>
      <CardMedia onClick={handleCardClick} component="img" height="180" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6" component="div" sx={{ overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',}}>
                {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {descriptionMethod}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default RecipeCard;
