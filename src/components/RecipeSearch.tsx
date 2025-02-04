import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Autocomplete } from '@mui/material';
import { RecipeSearchArrayProps, RecipeSearchProps } from '../types/RecipeTypes';
import { debounce } from "lodash";
import { fetchAutocomplete } from '../utils/RecipeApi';
import { forwardRef } from "react";

const RecipeSearch = forwardRef<HTMLDivElement, RecipeSearchProps>(({ query, onQueryChange, onSearch, isLoading }, ref) => {
// const RecipeSearch: React.FC<RecipeSearchProps> = ({ query, onQueryChange, onSearch, isLoading }) => {
  const [autocomplete, setAutocomplete] = useState<string[]>([]);
    // 자동 검색을 위한 API 호출 함수
    const debouncedFetchSuggestions = debounce(async (query: string) => {
      await fetchAutocomplete(query, setAutocomplete);  // fetchSuggestions 함수 호출
    }, 200);

    useEffect(() => {
      if (query) {
        debouncedFetchSuggestions(query);  // 검색어가 변경될 때마다 자동으로 검색
      } else {
        setAutocomplete([]);  // 검색어가 없을 경우 추천 목록 비우기
      }
      return () => debouncedFetchSuggestions.cancel(); // 컴포넌트 언마운트 시 디바운스 취소 초기 오류 방지
    }, [query]);

  return (
    <div ref={ref}>
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', marginBottom: 4, width: '100%' }}>
    <Autocomplete
      freeSolo
      options={autocomplete}
      onInputChange={(event, value) => onQueryChange(value)}  // 입력 값 변경 시 상태 업데이트
      renderInput={(params) => (
        <TextField 
          {...params} 
          label="Search for a recipe" 
          variant="outlined" 
          fullWidth // TextField에 fullWidth 적용
        />
      )}
      fullWidth // Autocomplete에 fullWidth 추가
    />
    <Button 
      variant="contained" 
      color="primary" 
      onClick={onSearch} 
      disabled={isLoading}
    >
      {isLoading ? 'Searching...' : 'Search'}
    </Button>
  </Box>
  </div>
    // <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', marginBottom: 4 }}>
    //   <TextField
    //     label="Search for a recipe"
    //     variant="outlined"
    //     fullWidth
    //     value={query}
    //     onChange={(e) => onQueryChange(e.target.value)}
    //   />
    //   <Button variant="contained" color="primary" onClick={onSearch} disabled={isLoading}>
    //     {isLoading ? 'Searching...' : 'Search'}
    //   </Button>
    // </Box>
  );
});

const RecipeSearchArray: React.FC<RecipeSearchArrayProps> = ({ query, onQueryChange, onSearch, isLoading }) => {
  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center', marginBottom: 4 }}>
      <TextField
        label="Search for a recipe"
        variant="outlined"
        fullWidth
        value={query}
        onChange={(e) => onQueryChange(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={onSearch} disabled={isLoading}>
        {isLoading ? 'Searching...' : 'Search'}
      </Button>
    </Box>
  );
};

export default RecipeSearch;



// export default RecipeSearchArray;
