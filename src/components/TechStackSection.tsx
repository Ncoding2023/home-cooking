import { Box, Typography, List, ListItem, ListItemText, Paper } from "@mui/material";

export const TechStackSection = () => {
  return (
    <Box sx={{ padding: 4, textAlign: 'left', background: "linear-gradient(to right, #ff7e5f, #feb47b)", borderRadius: 2 }}>
      <Typography variant="h4" gutterBottom sx={{fontWeight: 'bold', color: "#fff"}}>
        📌 기술 스택
      </Typography>

      <Paper sx={{ padding: 3, marginBottom: 3, backgroundColor: "#fff" }}>
        <Typography variant="h6" gutterBottom>
          Frontend
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="- React (with TypeScript): 컴포넌트 기반 UI 개발" />
          </ListItem>
          <ListItem>
            <ListItemText primary="- Vite: 빠른 빌드와 개발 환경 제공" />
          </ListItem>
          <ListItem>
            <ListItemText primary="- MUI + styled-components: UI 스타일링" />
          </ListItem>
        </List>
      </Paper>

      <Paper sx={{ padding: 3, marginBottom: 3, backgroundColor: "#fff" }}>
        <Typography variant="h6" gutterBottom>
          OPEN - API & 데이터 처리
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="- 공공 데이터 포털 API (조리식품의 레시피 DB): 레시피 데이터 제공" />
          </ListItem>
          <ListItem>
            <ListItemText primary="- Lodash (Debounce 활용): 검색 최적화" />
          </ListItem>
        </List>
      </Paper>

      <Paper sx={{ padding: 3, backgroundColor: "#fff" }}>
        <Typography variant="h6" gutterBottom>
          배포 & 협업
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="GitHub: https://github.com/Ncoding2023/home-cooking" />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );
};

export default TechStackSection;
