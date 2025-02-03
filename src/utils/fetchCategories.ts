export const fetchCategories = async (): Promise<string[]> => {
    const apiUrl = 'http://openapi.foodsafetykorea.go.kr/api/keyId/serviceId/dataType/categories';  // 카테고리 API 주소
  
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      return data.categories || [];
    } catch (error) {
      console.error("Error fetching categories: ", error);
      return [];
    }
  };
  