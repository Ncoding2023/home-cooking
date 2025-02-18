import React from 'react';
import { Box, Typography } from '@mui/material';
import PatchNotes from '../components/PatchNotes';
import AboutSection from '../components/AboutSection';
import TechStackSection from '../components/TechStackSection';


const RecipeAbout: React.FC = () => {

  return (
      <Box sx={{ p: 3 }}>
              <Typography variant="h1" gutterBottom>
      </Typography>
    <Box sx={{ marginBottom: 2 }}>
      <AboutSection/>
    </Box>
    <Box sx={{ marginBottom: 2 }}>
      <TechStackSection/>
    </Box>
      <Box sx={{ padding: 3, marginTop: 4, borderTop: '2px solid #ccc' }}>
  <PatchNotes />  {/* 게시판 컴포넌트 호출 */}
</Box>
    </Box>
  );
};
export default RecipeAbout;
