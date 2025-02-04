import React, { useState, useEffect } from "react";
import { TextField, Autocomplete } from "@mui/material";
import {debounce} from "lodash";

const Test1 = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const fetchSuggestions = async (query: string) => {
    if (!query) return;
    

    const SERVICE_ID = 'COOKRCP01'; // Example service ID for recipes
const DATA_TYPE = 'json'; // Response format
const apiKey = import.meta.env.VITE_RECIPE_API_KEY;
const baseUrl = 'http://openapi.foodsafetykorea.go.kr/api';

const startIdx = 1;
const endIdx = 10;

try {
      const response = await fetch(`${baseUrl}/${apiKey}/${SERVICE_ID}/${DATA_TYPE}/${startIdx}/${endIdx}/RCP_NM=${encodeURIComponent(query)}`);
      const data = await response.json();
console.log("data :: ",data[SERVICE_ID].row);//.RCP_NM
      // 검색 결과에서 레시피 이름만 추출
      const recipeNames = data[SERVICE_ID].row.map((item: any) => item.RCP_NM);
      setSuggestions(recipeNames);
    } catch (error) {
      console.error("자동완성 데이터를 불러오는 중 오류 발생:", error);
    }
  };

  // 디바운스 적용 (300ms 동안 입력이 없을 때만 실행)
  const debouncedFetchSuggestions = debounce(fetchSuggestions, 300);

  useEffect(() => {
    debouncedFetchSuggestions(searchTerm);
    return () => debouncedFetchSuggestions.cancel();
  }, [searchTerm]);

  return (
    <Autocomplete
      freeSolo
      options={suggestions}
      onInputChange={(event, value) => setSearchTerm(value)}
      renderInput={(params) => (
        <TextField {...params} label="레시피 검색" variant="outlined" />
      )}
    />
  );
};

export default Test1;
