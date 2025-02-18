import React, { useState } from "react";
import { Box } from "@mui/material";
import RecipeSearch from "../components/RecipeSearch";
import RecipeCarousel from "../components/RecipeCarousel";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const [query, setQuery] = useState("");
  const loading = false;
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };
  return (
    <Box sx={{ p: 3 }}>
      <RecipeCarousel />
      <RecipeSearch
        query={query}
        onQueryChange={setQuery}
        onSearch={handleSearch}
        isLoading={loading}
      />
    </Box>
  );
};

export default Home;