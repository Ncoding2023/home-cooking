import { Box, Typography, Paper } from "@mui/material";

export const AboutSection = () => {
  return (
    <Box sx={{ padding: 4, textAlign: 'left', background: 'linear-gradient(to right, #ff7e5f, #feb47b)', borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold',color: "#fff" }}>
        Recipe Finder
      </Typography>
      <Typography variant="body1" paragraph sx={{ color: '#fff' }}>
        사용자가 손쉽게 레시피를 검색하고 원하는 요리를 찾을 수 있도록 돕는 웹 애플리케이션
      </Typography>
      <Paper sx={{ padding: 3, marginBottom: 2, backgroundColor: '#fff', boxShadow: 3 }}>
        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
          주요 기능
        </Typography>
        <Typography variant="body1" sx={{ color: '#444' }}>
          - 검색창을 통한 레시피 검색 및 자동완성<br />
          - 카테고리 필터를 이용한 레시피 분류<br />
          - 레시피 상세 정보 제공 (재료, 조리법 등)<br />
          - 반응형 UI 제공
        </Typography>
      </Paper>
    </Box>
  );
};

export default AboutSection;
