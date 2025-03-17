import { FooterContainer, FooterContent, FooterLeft, FooterRight, FooterLink, FooterIconButton, FooterCenter } from "../styles/RecipeFooterStyles";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { Tooltip } from "@mui/material";

const RecipeFooter = () => {
  return (
    <>
    <FooterContainer>
      {/* 상단 내용: 사이트 설명 및 링크 */}
      <FooterContent className="top-section">
        {/* 사이트 설명 및 인사말 (좌측) */}
        <FooterLeft>
          {/* <span>Recipe Finder</span> */}
          <span>손쉬운 레시피로 더 맛있고 건강한 하루를! 🍲</span>
          <span>배달비는 줄이고, 집에서 맛있는 요리를! 🍴</span>
        </FooterLeft>

        <FooterCenter>
        {/* <span>Follow us on:</span> */}
          <FooterIconButton href="https://github.com/" target="_blank">
            <GitHubIcon />
          </FooterIconButton>
          <FooterIconButton href="https://twitter.com/" target="_blank">
            <TwitterIcon />
          </FooterIconButton>
          <FooterIconButton href="https://instagram.com/" target="_blank">
            <InstagramIcon />
          </FooterIconButton>
          <FooterIconButton href="tel:+01012345678" target="_blank">
            <PhoneIcon />
          </FooterIconButton>
          <FooterIconButton href="mailto:test@test.com" target="_blank">
            <MailIcon />
          </FooterIconButton>
        </FooterCenter>

        {/* SNS 링크 (우측) */}
        <FooterRight>
     <FooterLink href="/RecipeAbout">사이트 소개</FooterLink>
      <Tooltip title="준비 중">
        <span>
        <FooterLink href="#">연락처</FooterLink>
        </span>
      </Tooltip>
      <Tooltip title="준비 중">
        <span>
        <FooterLink href="#">사이트 맵</FooterLink> {/* 추가된 항목 */}
        </span>
      </Tooltip>
      <Tooltip title="준비 중">
        <span>
        <FooterLink href="#">블로그</FooterLink> {/* 추가된 항목tag's  */}
        </span>
      </Tooltip>
      </FooterRight>
      </FooterContent>

      {/* 하단 내용: 저작권 관련 정보 (중앙) */}
      <FooterContent className="bottom-section">
        <span>© 2025 Recipe Project. All Rights Reserved.</span>
        <span>본 웹사이트는 
          <a href="https://www.data.go.kr/">          
          공공데이터포털
          </a>
 의 데이터를 활용하여 제공됩니다.</span>
        <span>저작권 및 데이터 사용에 관한 자세한 사항은 관련 법령에 따라 적용됩니다.</span>
      </FooterContent>
    </FooterContainer>
    </>
  );
};

export default RecipeFooter;
