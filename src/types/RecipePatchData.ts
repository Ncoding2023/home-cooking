export // Mock Data (게시글 데이터)
const patchData = [
  {
    id: 1,
    title: "20250204",
    author: "남상원",
    createdAt: "20250204",
    status: "수정 및 추가",
    content: `20250204
    .
    RecipeCategoryFilter.tsx
    시작적으로 행이 맞지 않아 국&찌개 및 밥의 string 값을 변경했지만 
    api호출시 변경된 값으로 호출되어 조회가 되지 않아 롤백
    
    api호출 최적화시 필요
    npm install lodash
    RecipeSearch.tsx	add
    - debounce
    검색 자동완성: 사용자가 타이핑할 때마다 API 호출을 막고, 타이핑을 멈춘 후에 마지막 요청만 처리.
    윈도우 리사이징/스크롤 이벤트: 연속적으로 발생하는 이벤트를 처리할 때 성능 최적화.
    폼 입력: 입력 필드에서 빈번한 이벤트 발생을 줄이기 위해.
    자동완성 추가하며 사용
    - forwardRef  
    forwardRef는 컴포넌트가 ref를 자식 컴포넌트로 전달할 수 있도록 해줍니다.
    forwardRef로 래핑된 컴포넌트는 부모 컴포넌트가 ref를 사용할 수 있게 해주며, 이 ref는 실제 DOM 요소에 접근하는 데 사용됩니다.
    
    RecipeSearchPage.tsx	add 
    - 금일까지 홈페이지에 검색창에 검색시 하단에 목록 구현 했으나
    검색페이지로 분류하는 것이 좋을 거라 판단되어 페이지 추가 및 웹 전체에서 공통으로 쓸 수도 있게  RecipeNavbar.tsx에 추가 작업`,
  },
  {
    id: 2,
    title: "두 번째 게시글",
    author: "관리자",
    createdAt: "20250202",
    status: "대기",
    content: "두 번째 게시글 내용입니다.",
  },
];
