# Recipe Finder

# React + TypeScript + Vite
[![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/react-%2320232a.svg?logo=react&logoColor=%2361DAFB)](https://react.dev/)

# 프로젝트 개요
Recipe Finder는 물가 상승과 생활 패턴 변화에 따라 배달 음식 의존도 증가 → 개인 재정 악화 + 건강 관리 어려움 이라는 사회적 문제를 해결하기 위해 기획된 정적 프론트엔드 중심의 레시피 검색 플랫폼입니다.

# 주요 기술 스택
```
Frontend
- React (with TypeScript): 컴포넌트 기반 UI 개발
- Vite: 빠른 빌드와 개발 환경 제공
- MUI + styled-components: UI 스타일링
OPEN - API & 데이터 처리
- 공공 데이터 포털 API (조리식품의 레시피 DB): 레시피 데이터 제공
배포
GitHubPage
- GitHub: https://github.com/Ncoding2023/home-cooking
```

# 프로젝트 구조
```
상위
components/
│   ├── AboutSection.tsx			# About페이지의 소개글 컴포넌트
│   ├── ExcludeIngredientFilter.tsx 	# 개발중
│   ├── PageNavigation.tsx 		# 페이지네이션
│   ├── PatchNotes.tsx			# About페이지의 수정된 내용 작성글 정적 컴포넌트
│   ├── RecipeCard.tsx			# 게시물
│   ├── RecipeCarousel.tsx		# 캐러셀 
│   ├── RecipeCategoryFilter.tsx	# 요리종류 카테고리 필터 
│   ├── RecipeFooter.tsx			# 푸터 
│   ├── RecipeMethodsFilter.tsx		# 요리방식 메뉴명 필터 
│   ├── RecipeNavbar.tsx			# 메뉴바 
│   ├── RecipeSearch.tsx			# 검색
│   ├── RenderPlaceholderCards.tsx	# 게시물 빈공간 목록 디자인 유지용도
│   ├── TechStackSection.tsx		# About페이지의 기술스택 관련 정보 글
 pages/
│   ├── Home.tsx	           	# 메인 페이지 
│   ├── RecipeAbout.tsx		# 소개 페이지 
│   ├── RecipeDetail.tsx		# 레시피 설명 페이지 
│   ├── RecipeFavorite.tsx		# 즐겨찾기 페이지 
│   ├── RecipeList.tsx		# 목록 페이지 
│   ├── RecipeSearchExclude.tsx	# 개발중
│   ├── RecipeSearchPage.tsx		# 검색 페이지 
│   ├── Test1.tsx		# 컴퍼넌트 테스트용 페이지
├── styles/
│   ├──  Carousel.css		# 캐러셀 스타일
│   ├──   RecipeCategoryFilterStyles.ts 		# 카테고리의 요리 종류 및 방식 필터 스타일
│   ├──   RecipeDetailStyles.ts		# 레시피 설명 페이지 스타일
│   ├──   RecipeFooterStyles.ts		# 푸터 스타일
│   ├──   RecipeListStyles.ts		# 레시피 목록 페이지 스타일
│   ├──   RecipeNavbarStyles.ts		# 메뉴바 스타일
├── types/
│   └── RecipeContext.ts			# 테스트용 정적 레시피 데이터
│   └── RecipePatchData.ts		# 소개 페이지의 패치 내역 정적 데이터
│   └── RecipeTypes.ts			# 레시피 검색 웹의 인터페이스 모음
├── utils/
│   └──  fetchCategories.ts			# 카테고리 APIurl호출
│   └──   RecipeApi.ts				# 레시피 검색 웹의 용도별APIurl호출함수
│   └──   RecipeListUtils.ts			# 개발중
```
# 주요 기능 
- 검색창을 통한 레시피 검색 및 자동완성
- 카테고리 필터를 이용한 레시피 분류
- 레시피 상세 정보 제공 (재료, 조리법 등)
- 회원가입 불필요 → 즉시 사용 가능

=======
# home-cooking
2025.02.03 공개로 재생성
