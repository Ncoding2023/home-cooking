import React from 'react';
import { Box, Typography } from '@mui/material';
import PatchNotes from '../components/PatchNotes';
import AboutSection from '../components/AboutSection';
import TechStackSection from '../components/TechStackSection';


const RecipeAbout: React.FC = () => {

  return (
      <Box sx={{  width: 950,p: 3 }}>
              <Typography variant="h1" gutterBottom>
      </Typography>
    <Box sx={{ marginBottom: 2 }}>
      <AboutSection/>
    </Box>
    <Box sx={{ marginBottom: 2 }}>
      <TechStackSection/>
    </Box>
    {/* <hr /> */}
      <Box sx={{ marginTop: 4 }}>
  <PatchNotes />  {/* 게시판 컴포넌트 호출 */}
</Box>
    </Box>
  );
};
export default RecipeAbout;
