import { Container, Typography, Box, IconButton } from "@mui/material";
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
        <Typography variant="h6">Recipe Finder</Typography>
        <Typography variant="body2">
          맛있는 레시피를 찾아 만들어 먹자! 🍽️
        </Typography>

    {/* 사이트 소개, 연락처, 개인정보 처리방침, 이용 약관 */}
    <Box sx={{ mt: 2 }}>
      <Typography variant="body2">
        <a href="/RecipeAbout" style={{ color: 'white', marginRight: '20px' }}>사이트 소개</a>
        <a href="/contact" style={{ color: 'white', marginRight: '20px' }}>연락처</a>
        <a href="/privacy-policy" style={{ color: 'white', marginRight: '20px' }}>개인정보 처리방침</a>
        <a href="/terms" style={{ color: 'white' }}>이용 약관</a>
      </Typography>
    </Box>

        {/* SNS 링크 */}
        <Box sx={{ mt: 1 }}>
        <p>Follow us on:</p>
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
          본 웹사이트는 <a href="https://www.data.go.kr/" target="_blank">공공데이터포털</a>의 데이터를 활용하여 제공됩니다. <br />
          저작권 및 데이터 사용에 관한 자세한 사항은 관련 법령에 따라 적용됩니다.
        </Typography>
      </Container>
    </Box>
    
  );
};

export default RecipeFooter;
