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
    title: "20250206",
    author: "남상원",
    createdAt: "20250206",
    status: "수정 및 추가",
    content: `20250206
    .
    About add
    About 페이지를 만들면 프로젝트를 보다 전문적으로 보이게 할 수 있어. 현재 GitHub에 소스를 오픈하고 있다면, 다음과 같은 요소를 추가하면 좋을 것 같아:

      프로젝트 소개: 프로젝트의 목적과 기능을 간략히 설명
      기술 스택: 사용한 기술 및 프레임워크 명시
      깃허브 링크: 코드 저장소로 이동할 수 있도록 추가
      업데이트 내역: 주요 변경 사항이나 향후 계획 공유
      
파일명 : RecipeAbout

RecipeDetail 추가 작업으로 현재 관련 게시물 작업도중   API호출시 200이 나오며 오류 발생 중
오류가 발생 중이므로 금일의 githud는 보류

    `,
  },
  {
    id: 3,
    title: "20250211",
    author: "남상원",
    createdAt: "20250211",
    status: "수정 및 추가",
    content: `20250211
    .
    추가
    RecipeFavorite add
    RecipeFavorite 페이지를 추가하면서 찜목록 구현

    수정
    RecipeCard update
    RecipeCard 컴포넌트에 찜 관련으로 웹 스토리지 구현
    아직 미ㅇ완성
    
    20시03분
    식품명이 길어진 경우 찜 아이콘과 꼅치는 현상 발견 후 조치
    RecipeCard update 디자인
    sx={{ textAlign: 'left' }}
    sx={{ position: 'absolute', top: 48, right: 8 }}
    
    

    `,
  },
  {
    id: 4,
    title: "20250213",
    author: "남상원",
    createdAt: "20250213",
    status: "수정 및 추가",
    content: `20250213
    .
    추가
    RecipeFooter add
    풋터 추가
    풋터는 메뉴바 처럼 양쪽으로 늘려 활용

    수정
    RecipeNavbar update
    각 메뉴명을 텍스트에서 아이콘으로 변경

    `,
  },
  {
    id: 5,
    title: "20250215",
    author: "남상원",
    createdAt: "20250215",
    status: "수정 및 추가",
    content: `20250215
    .
    all 정리

    `,
  },
  
];
