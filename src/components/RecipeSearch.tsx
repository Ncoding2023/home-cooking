import { useState, useEffect } from 'react';
import { Box, TextField, Button, Autocomplete } from '@mui/material';
import { RecipeSearchProps } from '../types/RecipeTypes';
import { debounce } from "lodash";
import { fetchAutocomplete } from '../utils/RecipeApi';
import { forwardRef } from "react";

const RecipeSearch = forwardRef<HTMLDivElement, RecipeSearchProps>(({ query, onQueryChange, onSearch, isLoading }, ref) => {
  const [autocomplete, setAutocomplete] = useState<string[]>([]);
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
      onInputChange={(_, value) => onQueryChange(value)}  
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
      // color="linear-gradient(90deg, #ff6f61, #ff9f80)" 
      onClick={onSearch} 
      disabled={isLoading}
      sx={{
        background: 'linear-gradient(to right, #ff7e5f, #feb47b)',  // linear-gradient 적용
        '&:hover': {
          background: 'linear-gradient(to right, #feb47b, #ff7e5f)',  // hover 시 배경 반전
        },
      }}
    >
      {isLoading ? 'Searching...' : 'Search'}
    </Button>
  </Box>
  </div>
  );
});

export default RecipeSearch;