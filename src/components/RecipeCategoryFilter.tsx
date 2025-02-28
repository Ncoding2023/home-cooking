import React from 'react';
import { RecipeCategoryFilterProps } from '../types/RecipeTypes';
import { CategoryBox, CategoryContainer, CategoryItem, CategoryTitle } from '../styles/RecipeCategoryFilterStyles';
import { Apps, SoupKitchen, DinnerDining, RiceBowl, FoodBank, Cake, Restaurant, RestaurantMenu } from "@mui/icons-material";


const RecipeCategoryFilter: React.FC<RecipeCategoryFilterProps> = ({
  selectedRecipeCategory,
  onCategoryChange,
}) => {
const categories = [
  { name: "", icon: <Apps /> }, // 
  { name: "국&찌개", icon: <SoupKitchen /> }, // 국물 요리 → 🍜
  { name: "반찬", icon: <DinnerDining  /> }, // 반찬 → 🍳
  { name: "밥", icon: <RiceBowl /> }, // 밥 → 🍚
  { name: "일품", icon: <FoodBank /> }, // 단품 요리 → 🍽
  { name: "후식", icon: <Cake/> }, // 디저트 → 🍦
  { name: "기타", icon: <Restaurant /> } // 기타 → 🍴
];
  // const categories = ['국&찌개', '반찬', '밥', '일품', '후식', '기타'];
  return (
    <CategoryContainer>
      <CategoryTitle color='#B44D3A'>
        <RestaurantMenu /> <strong>종류</strong>
        </CategoryTitle>
      <CategoryBox>
        {categories.map((category) => (
    <CategoryItem
      key={category.name}
      isActive={selectedRecipeCategory === (category.name === '국&찌개' ? '국' : category.name)}
      onClick={() => onCategoryChange(category.name)}
    >
      {category.icon}
      <span>{category.name}</span>
    </CategoryItem>
  ))}
      </CategoryBox>
    </CategoryContainer>
  );
};

export default RecipeCategoryFilter;
