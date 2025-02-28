import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Typography, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import { RecipeCardProps } from '../types/RecipeTypes';

const RecipeCard: React.FC<RecipeCardProps> = ({ title, description, descriptionMethod, image, recipeAll }) => {
    const navigate = useNavigate();  // navigate 함수 사용을 위해 선언
    const [isFavorited, setIsFavorited] = useState(false);  // 찜 상태 관리

    // 로컬 스토리지에서 레시피 데이터 불러오기
    useEffect(() => {
        const savedRecipe = localStorage.getItem(`favorite-${recipeAll.RCP_SEQ}`);
        if (savedRecipe) {
            const savedData = JSON.parse(savedRecipe);
            setIsFavorited(savedData.isFavorited);
        }
    }, [recipeAll.RCP_SEQ]);

    // 카드 클릭 시 발생하는 이벤트 처리
    const handleCardClick = () => {
        navigate(`/recipe/${recipeAll.RCP_SEQ}`, {
            state: { recipeAll }, // 상태로 데이터 전달
        });  // 상세 페이지로 이동
    };

    // 찜 상태 토글
    const handleFavoriteToggle = () => {
        setIsFavorited((prev) => {
            const newStatus = !prev;

            // localStorage에서 현재 찜 목록 가져오기
            const savedFavorites = localStorage.getItem("favorites");
            let favorites = savedFavorites ? JSON.parse(savedFavorites) : [];

            // 새로운 레시피 데이터
            const favoriteData = {
                RCP_SEQ: recipeAll.RCP_SEQ,
                title,
                description,
                descriptionMethod,
                image,
                recipeAll,
                isFavorited: newStatus,
            };

            if (newStatus) {
                // 찜 상태가 true일 때, 찜 목록에 추가
                favorites.push(favoriteData);
            } else {
                // 찜 상태가 false일 때, 찜 목록에서 제거
                favorites = favorites.filter((fav: any) => fav.RCP_SEQ !== recipeAll.RCP_SEQ);
            }

            // localStorage에 찜 목록 저장
            localStorage.setItem("favorites", JSON.stringify(favorites));
            localStorage.setItem(`favorite-${recipeAll.RCP_SEQ}`, JSON.stringify(favoriteData)); // 개별 레시피도 저장

            return newStatus;
        });
    };

    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            flexGrow: 1,  // 부모 요소의 공간을 차지하도록 설정
        }}>
            <CardMedia onClick={handleCardClick} component="img" height="180" image={image} alt={title} />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative', background: "linear-gradient(to right, #ff7e5f, #feb47b)"}}>
                {/* 제목 부분 */}
                <Typography variant="h6" component="div" sx={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                    {title}
                </Typography>

                {/* 종류와 방식 텍스트 */}
                <Typography variant="body2" color="text.secondary" noWrap sx={{ textAlign: 'left' }}>
                    <strong>종류</strong> &gt; {description}
                </Typography>
                <Typography variant="body2" color="text.secondary" noWrap sx={{ textAlign: 'left' }}>
                    <strong>방식</strong> &gt; {descriptionMethod}
                </Typography>

                {/* 찜 아이콘 하나만 우측에 배치 */}
                <IconButton 
                    onClick={(e) => { 
                        e.stopPropagation(); // 카드 클릭 이벤트가 발생하지 않도록
                        handleFavoriteToggle(); // 찜 상태 토글
                    }} 
                    sx={{ position: 'absolute', top: 48, right: 8 }}
                >
                    {isFavorited ? <Favorite color="error" /> : <FavoriteBorder />}
                </IconButton>
            </CardContent>
        </Card>
    );
};

export default RecipeCard;
