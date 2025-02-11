import React, { useState } from 'react';
import { Box, Grid, Typography } from '@mui/material';
import RecipeSearch from '../components/RecipeSearch';
import RecipeCard from '../components/RecipeCard';
import { fetchRecipeDtls, fetchRecipeNms } from '../utils/RecipeApi';
import RecipeCarousel from '../components/RecipeCarousel';
import { Recipe } from '../types/RecipeTypes';
import { useNavigate } from 'react-router-dom';
import PatchNotes from '../components/PatchNotes';
import AboutSection from '../components/AboutSection';
import TechStackSection from '../components/TechStackSection';


const RecipeAbout: React.FC = () => {

  return (
      <Box sx={{ p: 3 }}>
              <Typography variant="h1" gutterBottom>
      {/* About */}
      {/* RecipeAbout */}
      </Typography>
    <Box sx={{ marginBottom: 2 }}>
      <AboutSection/>
    </Box>
    <Box sx={{ marginBottom: 2 }}>
      <TechStackSection/>
    </Box>
      {/* 홈페이지 하단에 게시판 추가 */}
      <Box sx={{ padding: 3, marginTop: 4, borderTop: '2px solid #ccc' }}>
  <PatchNotes />  {/* 게시판 컴포넌트 호출 */}
</Box>
    </Box>
  );
};
export default RecipeAbout;
