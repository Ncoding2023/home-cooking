import { Container, Typography, Box, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const RecipeFooter = () => {
  return (
<Box 
      component="footer"
      sx={{ 
        mt: "auto",       // ✅ 푸터를 페이지 아래로 밀어냄
        position: "absolute",  // ✅ 하단 고정
        left: 0,            // ✅ 왼쪽 끝부터 시작
        width: "100%",      // ✅ 전체 폭 차지
        py: 2, 
        // pd: 0, 
        bgcolor: "transparent",
        background: "linear-gradient(90deg, #FF6F61, #FF9F80)", 
        color: "white",
        textAlign: "center",
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h6">Recipe Project</Typography>
        <Typography variant="body2">
          맛있는 레시피를 찾아 만들어 먹자! 🍽️
        </Typography>

        {/* SNS 링크 */}
        <Box sx={{ mt: 1 }}>
          <IconButton component="a" href="https://github.com/" target="_blank" color="inherit">
            <GitHubIcon />
          </IconButton>
          <IconButton component="a" href="https://twitter.com/" target="_blank" color="inherit">
            <TwitterIcon />
          </IconButton>
          <IconButton component="a" href="https://instagram.com/" target="_blank" color="inherit">
            <InstagramIcon />
          </IconButton>
        </Box>

        {/* 저작권 정보 */}
        <Typography variant="body2" sx={{ mt: 2 }}>
          © {new Date().getFullYear()} Recipe Project. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default RecipeFooter;
