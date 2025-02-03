export interface Recipe {
    RCP_SEQ: string; // Recipe unique identifier
    RCP_NM: string;  // Recipe name
    RCP_WAY2?: string; // Description (optional)
    RCP_PAT2?: string; // Description (optional)
    ATT_FILE_NO_MAIN?: string; // Image URL (optional)
  }

export interface RecipeAll {
    RCP_SEQ: number; // 일련번호
    RCP_NM: string; // 메뉴명
    RCP_WAY2: string; // 조리방법
    RCP_PAT2: string; // 요리종류
    INFO_WGT: string; // 중량(1인분)
    INFO_ENG: string; // 열량
    INFO_CAR: string; // 탄수화물
    INFO_PRO: string; // 단백질
    INFO_FAT: string; // 지방
    INFO_NA: string; // 나트륨
    HASH_TAG: string[]; // 해쉬태그 (배열)
    ATT_FILE_NO_MAIN: string; // 이미지경로(소)
    ATT_FILE_NO_MK: string; // 이미지경로(대)
    RCP_PARTS_DTLS: string; // 재료정보
    MANUAL: { [key: string]: string }; // 만드는 법과 이미지
    RCP_NA_TIP: string; // 저감 조리법 TIP
  }
  
  export interface PaginationProps {
    startIdx: number;
    endIdx: number;
    totalItems: number;
    onPageChange: (newStartIdx: number, newEndIdx: number) => void;
  }

  export interface RecipeSearchProps {
    query: string;
    onQueryChange: (value: string) => void;
    onSearch: () => void;
    isLoading: boolean;
  }

  export interface RecipeSearchArrayProps {
    query: string[];
    onQueryChange: (value: string) => void;
    onSearch: () => void;
    isLoading: boolean;
  }



  export interface RecipeCardProps {
    title: string;
    description: string;
    descriptionMethod: string;
    image: string;
    recipeAll: any;
  }

  export interface RecipeDetailProps {
    RCP_NM: string; // 레시피 이름
    ATT_FILE_NO_MAIN: string; // 메인 이미지 URL
    RCP_PARTS_DTLS: string; // 재료 정보
    RCP_WAY2: string; // 조리 방법
    RCP_PAT2: string; // 음식 종류
    RCP_NA_TIP: string; // 요리 팁
    MANUAL01?: string; // 조리 단계 1
    MANUAL02?: string; // 조리 단계 2
    MANUAL03?: string; // 조리 단계 3
    [key: string]: any; // 추가 필드 허용
  }

  export interface RecipeCategoryFilterProps {
    selectedRecipeCategory: string; // 선택된 카테고리
    onCategoryChange: (category: string) => void; // 카테고리 변경 핸들러
  }

//제외 ingredient
  export interface ExcludeIngredientFilterProps {
    excludedIngredients: string; // 선택된 요리재료
    onExcludedIngredientsChange: (ingredient: string) => void;
  }

  //요리재료
  export interface RecipeMethodsFilterProps {
    selectedRecipeMethods: string; // 선택된 요리재료
    onRecipeMethodsChange: (RecipeMethods: string) => void; //  요리재료 변경 핸들러
  }