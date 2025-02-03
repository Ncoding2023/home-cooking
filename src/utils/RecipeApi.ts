import { colors } from '@mui/material';
import { Recipe, RecipeAll } from '../types/RecipeTypes';  // 인터페이스 임포트

const SERVICE_ID = 'COOKRCP01'; // Example service ID for recipes
const DATA_TYPE = 'json'; // Response format
const apiKey = import.meta.env.VITE_RECIPE_API_KEY;

  // 키워드 다른곳에서 배열로 사용할 수도 있음 임시
  export const fetchRecipeNms = async (
    query: string,
    startIdx = 1,
    endIdx = 20
  ): Promise<Recipe[]> => {
    try {
      const apiUrlNm = await fetch(`http://openapi.foodsafetykorea.go.kr/api/${apiKey}/${SERVICE_ID}/${DATA_TYPE}/${startIdx}/${endIdx}/RCP_NM=${query}`);
  
      if (!apiUrlNm.ok) {
        throw new Error(`API 호출 실패: ${apiUrlNm.statusText}`);
      }
  
      const data = await apiUrlNm.json();
      
      // 데이터 구조 검증
      if (data[SERVICE_ID] && data[SERVICE_ID].row) {
        return data[SERVICE_ID].row;
      } else {
        console.warn('키워드가 포함된 요리명이 없습니다.');
        return []; // 결과가 없으면 빈 배열 반환
      }
    } catch (error) {
      console.error('API 호출 중 오류 발생:', error);
      return []; // 오류 발생 시 빈 배열 반환
    }
  };

    // 키워드 다른곳에서 배열로 사용할 수도 있음 임시
    export const fetchRecipeDtls = async (
      query: string,
      startIdx = 1,
      endIdx = 20
    ): Promise<Recipe[]> => {
      try {
        const apiUrlDtls = await fetch(`http://openapi.foodsafetykorea.go.kr/api/${apiKey}/${SERVICE_ID}/${DATA_TYPE}/${startIdx}/${endIdx}/RCP_PARTS_DTLS=${query}`);
    
        if (!apiUrlDtls.ok) {
          throw new Error(`API 호출 실패: ${apiUrlDtls.statusText}`);
        }
    
        const data = await apiUrlDtls.json();
        
        // 데이터 구조 검증
        if (data[SERVICE_ID] && data[SERVICE_ID].row) {
          return data[SERVICE_ID].row;
        } else {
          console.warn('키워드가 포함된 재료가 없습니다.');
          return []; // 결과가 없으면 빈 배열 반환
        }
      } catch (error) {
        console.error('API 호출 중 오류 발생:', error);
        return []; // 오류 발생 시 빈 배열 반환
      }
    };
  
  // 디폴트
export const fetchRecipeList = async (
    startIdx: number,
    endIdx: number
  ): Promise<{ recipes: Recipe[], totalCount: number }> => {
    let apiUrl = `http://openapi.foodsafetykorea.go.kr/api/${apiKey}/${SERVICE_ID}/${DATA_TYPE}/${startIdx}/${endIdx}/`;
    
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return {
          recipes: data[SERVICE_ID]?.row || [],
        totalCount: data[SERVICE_ID]?.total_count || 0, 
      };  // 페이징을 위한 데이터 반환
    } catch (error) {
      console.error("Error fetching data: ", error);
      return { recipes: [], totalCount: 0 }; // 오류 발생 시 빈 배열과 0 반환
    }
  };

  // 카테고리
  //요리종류
  export const fetchRecipeCategories = async (
    category:  string,
    startIdx: number,
    endIdx: number,
    ): Promise<{ recipes: Recipe[], totalCount: number }> => {
    let  apiUrl = `http://openapi.foodsafetykorea.go.kr/api/${apiKey}/${SERVICE_ID}/${DATA_TYPE}/${startIdx}/${endIdx}/RCP_PAT2=${encodeURIComponent(
      category
    )}`;
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return {
          recipes: data[SERVICE_ID]?.row || [],
        totalCount: data[SERVICE_ID]?.total_count || 0, 
      };  // 페이징을 위한 데이터 반환
    } catch (error) {
      console.error("Error fetching data: ", error);
      return { recipes: [], totalCount: 0 }; // 오류 발생 시 빈 배열과 0 반환
    }
  };


  // 재료 제외 RecipeSearchExclude RCP_PARTS_DTLS 필터 조건때문에 이건 안쓸거 같다
  export const fetchRecipesExclude = async (
    query: string | string[],  // query는 string[] 또는 string일 수 있음
    startIdx = 1,
    endIdx = 10
  ): Promise<RecipeAll[]> => {
    const apiUrl = `http://openapi.foodsafetykorea.go.kr/api/${apiKey}/${SERVICE_ID}/${DATA_TYPE}/${startIdx}/${endIdx}`;
    
    try {
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      
      const data = await response.json();
      const recipes = data?.body?.items || [];
  
      // query가 단수일 경우, includes를 사용하고, 배열일 경우에는 some을 사용
      return recipes.filter((recipe: RecipeAll) => {
        if (typeof query === 'string') {
          // query가 단일 문자열일 경우
          return !recipe.RCP_PARTS_DTLS.includes(query);
        } else {
          // query가 배열일 경우
          return !query.some((keyword: string) => recipe.RCP_PARTS_DTLS.includes(keyword));
        }
      });
    } catch (error) {
      console.error("Error fetching recipes:", error);
      return [];
    }
  };