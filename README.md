<<<<<<< HEAD
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## 주요 기술 스택

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
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
App.css 최상위 스타일
App.tsx 최상위 파일
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
=======
# home-cooking
2025.02.03 공개로 재생성
